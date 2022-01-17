const { join, resolve } = require('path')
const { copySync, removeSync } = require('fs-extra')
const mix = require('laravel-mix')
require('laravel-mix-versionhash')

mix
  .js('resources/js/app.js', 'public/dist/js').vue({
    extractStyles: true
  })
  .sass('resources/sass/app.scss', 'public/dist/css')

  .disableNotifications()


mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': join(__dirname, './resources/js'),
      'Components': join(__dirname, './resources/js/router'),
      'Store': join(__dirname, './resources/js/store'),
      'Pages': join(__dirname, './resources/js/pages')
    }
  },
  output: {
    chunkFilename: 'dist/js/[chunkhash].js',
    path: resolve(__dirname, mix.inProduction() ? './public/build' : './public')
  }
})

mix.then(() => {
  if (mix.inProduction()) {
    process.nextTick(() => publishAseets())
  }
})


function publishAseets () {
  const publicDir = resolve(__dirname, './public')

  removeSync(join(publicDir, 'dist'))
  copySync(join(publicDir, 'build', 'dist'), join(publicDir, 'dist'))
  removeSync(join(publicDir, 'build'))
}