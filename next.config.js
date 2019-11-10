const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css')
module.exports = withPlugins([
  [withLess, withCSS], { cssModules: true }
]);

/* With CSS Modules */
// module.exports = withLess({ cssModules: true })

/* With additional configuration on top of CSS Modules */
/*
module.exports = withLess({
  cssModules: true,
  webpack: function (config) {
    return config;
  }
});
*/

