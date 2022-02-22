/**
 * Laravel mix entry point
 *
 * Load the appropriate section
 */

let mix = require('laravel-mix');

if (process.env.section) {
  require(`${__dirname}/webpack.mix.${process.env.section}.js`);
}

// Disable mix-manifest.json (https://github.com/JeffreyWay/laravel-mix/issues/580)
// Prevent the distribution zip file containing an unwanted file
mix.options({ manifest: false })
