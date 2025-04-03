const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    port : 8099,
    proxy : {
      '^/api' : {
        target ,
        changeOrigin : true,
        pathRewrite : {'^/api': '/'},
        ws : false
      }
    }
  }
})
