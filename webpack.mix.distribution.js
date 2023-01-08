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

mix
  .setPublicPath('./dist')
  .copyDirectory('resources', dist_dir + '/resources')
  .copy('module.php', dist_dir)
  .copy('LICENSE.md', dist_dir)
  .copy('README.md', dist_dir)
  .clean();
