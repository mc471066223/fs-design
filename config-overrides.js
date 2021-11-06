/**
 * 非eject方式暴露webpack配置
 * 使用customize-cra自定义webpack配置
 * 参考文档[https://github.com/arackaf/customize-cra/blob/master/api.md#setwebpackoptimizationsplitchunkstarget]
 */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); //分析插件，打包后在build/static/report.html中展示各模块所占的大小
const CompressionPlugin = require('compression-webpack-plugin'); // gzip 压缩 (5.0.1版本)

const {
  override,
  addWebpackAlias,
  fixBabelImports,
  addWebpackPlugin,
  addWebpackModuleRule,
  addDecoratorsLegacy,
  setWebpackOptimizationSplitChunks
} = require('customize-cra');
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

// 引用 antd 后设置按需引入后，在打包的时候会生成很多 .map 文件
process.env.GENERATE_SOURCEMAP = 'false';

const isProd = process.env.NODE_ENV === 'production'; //是否分析打包数据
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = override(
  addDecoratorsLegacy(),
  /* 按需引入antd */
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: 'css'
  }),

  addWebpackModuleRule({
    test: /\.svg$/,
    include: [path.resolve(__dirname, './src/icons')],
    use: [
      {
        loader: 'svg-sprite-loader',
        options: { symbolId: 'icon-[name]' }
      }
    ]
  }),

  /* 按需引入lodash */
  fixBabelImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false
  }),

  /* 别名设置 */
  addWebpackAlias({
    '@/': resolve('src'),
    '@/components': resolve('./src/components'),
    '@/utils': resolve('./src/utils'),
    '@/pages': resolve('./src/pages'),
    '@/stores': resolve('./src/stores'),
    '@/api': resolve('./src/api'),
    '@/routers': resolve('./src/routers'),
    '@/assets': resolve('./src/assets'),
    '@/config': resolve('./src/config'),
    '@/layouts': resolve('./src/layouts'),
    '@/styles': resolve('./src/styles')
  }),

  setWebpackOptimizationSplitChunks({
    chunks: 'all',
    cacheGroups: {
      // reactDom: {
      //   test: /[\\/]node_modules[\\/]_?react\-dom(.*)/, // 兼容cnpm 情况
      //   name: 'react-dom',
      //   chunks: 'initial',
      //   minChunks: 1,
      //   minSize: 0,
      //   priority: 3,
      //   reuseExistingChunk: true
      // },
      libs: {
        // 拆分第三方库（通过npm|yarn安装的库）
        test: /[\\/]node_modules[\\/]/,
        name: 'chunk-libs',
        chunks: 'initial',
        priority: 1
      }
    }
  }),

  isProd &&
    addWebpackPlugin(
      // @ts-ignore
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions, // 匹配文件名
        threshold: 10240, // 对超过 10k 数据压缩
        minRatio: 0.8,
        deleteOriginalAssets: false // true-删除原文件 false-不删除源文件
      })
    ),

  isProd &&
    addWebpackPlugin(
      // @ts-ignore
      new BundleAnalyzerPlugin({
        analyzerMode: 'static' //输出静态报告文件report.html，而不是启动一个web服务
      })
    ),
);
