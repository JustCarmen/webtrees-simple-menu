/**
 * Laravel mix - Simple Menu
 *
 * Output:
 * 		- jc-simple-menu-x.zip
 *
 */

let mix = require('laravel-mix');
const version = '1.0';

//https://github.com/gregnb/filemanager-webpack-plugin
const FileManagerPlugin = require('filemanager-webpack-plugin');

mix.webpackConfig({
    plugins: [
        new FileManagerPlugin({
            events: {
                onEnd: {
                    archive: [{
                        source: './dist',
                        destination: 'dist/jc-simple-menu-' + version + '.zip'
                    }]
                }
            }
         })
    ]
});
