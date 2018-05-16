require('babel-core/register');
['.css', '.less', '.sass', '.scss', 'jsx', 'js', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('server/index.js');