
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // gzip 压缩
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');  // 打包分析


module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      [process.env.VUE_APP_PROXY_URL] : {
        target: [process.env.BASE_URL],
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_PROXY_URL] : ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,  //设置根元素为37.5px
            propList: [ '*' ]
          })
        ]
      }
    }
  },
  chainWebpack(config) {
    if (process.env.npm_lifecycle_event === "analyzer") {
      config.plugin('analyzer').use(BundleAnalyzerPlugin);
    } else if(process.env.NODE_ENV === 'production') {
      config
      .plugin('compression')
      .use(CompressionWebpackPlugin)
      .tap(() => [
        {
          test: /\.js$|\.html$|\.css/, // 匹配文件名
          threshold: 10240, // 超过10k进行压缩
          deleteOriginalAssets: false // 是否删除源文件
        }
      ])
    } 
  }
}
