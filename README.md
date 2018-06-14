## VUE制作的一个会议预订系统  

### 前端环境版本
+ node -v              v8.9.3  
+ npm -v               5.5.1  
+ vue --version        2.9.3  

vue全家桶以及其它库 vue vuex vue-router axios element-ui  
axios跨域需配置proxy table
```
    proxyTable: {
      '/api': {
        target: 'http://www.1cee.com:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
```


+ npm start 等同 npm run dev 用于启动项目  
+ npm build 打包命令
+ build dist node_modules 文件夹均未上传，请自行下载或自动生成


### 后端环境版本
+ node -v              v8.9.3  
+ npm -v               5.5.1  
+ express 4.16.3 局部安装 
+ MongoDB版本3.4 

后端仅仅提供数据请求API  

后端用到的库：
+ express   快速搭建服务器
+ ejs 模板引擎
+ body-parse  解析POST请求过来的键值对数据
+ mongodb 操作MongoDB数据库的驱动 请注意版本 此项目使用3.0.6

