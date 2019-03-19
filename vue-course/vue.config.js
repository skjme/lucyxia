const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false,
  //定义项目的基本路径
  baseUrl:BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('_c', resolve('src/components'))
  },
  //打包时不生成，.map文件 ,（这样会减少打包的体积，加快打包的速度）
  productionSourceMap: false,
  devServer:{
    proxy:'http://localhost:4000'
  }
}
