

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"./",
  transpileDependencies: true,
  //代理请求
  devServer: {
    port:8081,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7001",//自己后端开发的服务器地址
      },
      "/static": {
        target: "http://127.0.0.1:7001"
      }
    },
  },
  // 打包
  configureWebpack: require("./webpack.config"),
})
