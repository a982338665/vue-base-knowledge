<template>
  <div style="margin:5px 5px">
    <el-button @click="getFileName" type="primary">选择文件</el-button>
    <input type="file" webkitdirectory multiple="multiple" id="minIoFile" ref="minIoFile" v-show="false" @change="getFile">
    <el-button v-if="fileList.length>0" type="primary" @click="upload">上传</el-button>
    <el-button type="primary" @click="download">下载</el-button>
  </div>
</template>
<script>
  let Minio = require('minio')
  let stream = require('stream')
  //连接minio文件服务器
  this.minioClient = new Minio.Client({
    endPoint: '81.70.91.80',
    port: 9010,
    useSSL: false, // 如果配置了SSL
    accessKey: 'xZKJ1Nii4RdfvZN5ncrQ',
    secretKey: 'EomSeoTGSJAxOlVpBMeeZa0fXtMF5LR9N5GPRF2z'
  })
  export default {
    name: 'MesAdivce',
    data: () => ({
      fileList: [],
    }),
    methods: {
      download(filename, names) {
        minioClient.bucketExists('img', async function(err) {
          if (err) {
            if (err.code == 'NoSuchBucket') return console.log("bucket does not exist.")
            return console.log(err)
          }
          //存在
          const file = await new Promise((resolve, reject)=>{
            minioClient.getObject('img', '4A3D8BF371C044FDB3CED70010801EF5/1.3.12.2.1107.5.6.1.2387.30200122071903025612700000098.DCM', function (err, dataStream) {
              let size = 0;
              let file = [];
              dataStream.on('data', function (chunk) {
                size += chunk.length
                console.log(chunk);
                let aaa = Array.from(chunk)
                file = file.concat(aaa);
              })
              dataStream.on('end', function () {
                resolve(file)
              })
              dataStream.on('error', function (err) {
                resolve(false)
              })
            })
          })
          // 进行下载
          const blob = new Blob([file])
          const blobUrl = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.setAttribute('href', blobUrl)
          a.setAttribute('download', '1.3.12.2.1107.5.6.1.2387.30200122071903025612700000098.DCM')
          a.click()
        })
      },
      upload() {
        this.fileList.map((item, index) => {
          this.uploadMinIo(item, index);
        })
      },
      getFileName() {
        let inputDOM = this.$refs.minIoFile;
        inputDOM.click();
      },
      getFile(event) {
        let files = document.getElementById('minIoFile').files;
        let arr = [];
        let fileSwitch = true;
        if (files.length > 0) {
          for (let i = 0; i < files.length; i++) {
            if ((files[i].size / 1024 / 1024).toFixed(5) > 64) {
              this.$message({
                message: `${item.name}超过文件的最大长度`,
                type: 'warning'
              });
              fileSwitch = false;
            }
          }
          if (fileSwitch) {
            for (let i = 0; i < files.length; i++) {
              if ((files[i].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') ||
                (files[i].type == 'application/vnd.ms-excel') ||
                (files[i].type == 'text/plain') ||
                (files[i].type == 'image/png') ||
                (files[i].type == 'image/gif') ||
                (files[i].type == 'image/jpg') ||
                (files[i].type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') ||
                (files[i].type == 'application/vnd.openxmlformats-officedocument.presentationml.presentation')
              ) {
                this.fileList.push(files[i])
              } else {
                console.log("类型不对");
              }
            }
          }
        }
      },
      //上传文件
      uploadMinIo(fileObj, index) {
        this.fileList = this.fileList.filter((self, el) => {
          return self != fileObj
        })
        let vm = this
        // const files = fileObj;
        if (fileObj) {
          let file = fileObj
          //获取文件类型及大小
          const fileName = file.webkitRelativePath
          const mineType = file.type
          const fileSize = file.size
          //参数
          let metadata = {
            "content-type": mineType,
            "content-length": fileSize
          }
          //判断储存桶是否存在
          minioClient.bucketExists('ecgdata', function(err) {
            if (err) {
              if (err.code == 'NoSuchBucket') return console.log("bucket does not exist.")
              return console.log(err)
            }
            //准备上传
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function(e) { //读取完成触发，无论成功或失败
              const dataurl = e.target.result
              //base64转blob
              const blob = vm.toBlob(dataurl)
              //blob转arrayBuffer
              let reader2 = new FileReader()
              reader2.readAsArrayBuffer(blob)

              reader2.onload = function(ex) {
                //定义流
                let bufferStream = new stream.PassThrough();
                //将buffer写入
                bufferStream.end(new Buffer(ex.target.result));
                //上传
                minioClient.putObject('ecgdata', fileName, bufferStream, fileSize, metadata, function(err,
                                                                                                      etag) {
                  console.log(etag);
                })
              }
            }
          })
        }
      },
      //base64转blob
      toBlob(base64Data) {
        let byteString = base64Data
        if (base64Data.split(',')[0].indexOf('base64') >= 0) {
          byteString = atob(base64Data.split(',')[1]) // base64 解码
        } else {
          byteString = unescape(base64Data.split(',')[1])
        }
        // 获取文件类型
        let mimeString = base64Data.split(';')[0].split(":")[1] // mime类型

        // ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区
        // let arrayBuffer = new ArrayBuffer(byteString.length) // 创建缓冲数组
        // let uintArr = new Uint8Array(arrayBuffer) // 创建视图

        let uintArr = new Uint8Array(byteString.length) // 创建视图

        for (let i = 0; i < byteString.length; i++) {
          uintArr[i] = byteString.charCodeAt(i)
        }
        // 生成blob
        const blob = new Blob([uintArr], {
          type: mimeString
        })
        // 使用 Blob 创建一个指向类型化数组的URL, URL.createObjectURL是new Blob文件的方法,可以生成一个普通的url,可以直接使用,比如用在img.src上
        return blob
      },
    },
  }
</script>
