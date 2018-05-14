require('babel-core/register');
['.css', '.less', '.sass', '.scss'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('server.js');