/**
  * Laravel mix - Simple Menu
 *
 * Output:
 * 		- dist
 *        - resources
 *          - views
 *        module.php
 *        LICENSE.md
 *        README.md
 *
 */

let mix = require('laravel-mix');
require('laravel-mix-clean');

const dist_dir = 'dist/jc-simple-menu-1';

// Disable mix-manifest.json (https://github.com/laravel-mix/laravel-mix/issues/580#issuecomment-919102692)
// Prevent the distribution zip file containing an unwanted file
mix.options({ manifest: false })

mix
  .setPublicPath('./dist')
  .copyDirectory('resources/views', dist_dir + '/resources/views')
  .copy('module.php', dist_dir)
  .copy('LICENSE.md', dist_dir)
  .copy('README.md', dist_dir)
  .clean();
