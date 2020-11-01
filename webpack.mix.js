/**
 * Laravel mix entry point
 *
 * Load the appropriate section
 */

if (process.env.section) {
  require(`${__dirname}/webpack.mix.${process.env.section}.js`);
}

// Disable mix-manifest.json (https://github.com/JeffreyWay/laravel-mix/issues/580)
// Prevent the distribution zip file containing an unwanted file
Mix.manifest.refresh = _ => void 0

let mix = require('laravel-mix');
require('laravel-mix-clean');

const dist_dir = 'dist/jc-simple-menu-1';

//https://github.com/gregnb/filemanager-webpack-plugin
const FileManagerPlugin = require('filemanager-webpack-plugin');

mix
  .setPublicPath('./dist')
  .copyDirectory('resources/views', dist_dir + '/resources/views')
  .copy('module.php', dist_dir)
  .copy('LICENSE.md', dist_dir)
  .copy('README.md', dist_dir)
  .webpackConfig({
    plugins: [
      new FileManagerPlugin({
        onEnd: {
          archive: [{
            source: './dist',
            destination: 'dist/jc-simple-menu-1.zip'
          }]
        }
      })
    ]
  })
  .clean();
