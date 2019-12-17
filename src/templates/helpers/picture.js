var Handlebars = require('handlebars');

/**
 * Returns a `<picture>` with webp image and fallback
 *
 * @param {Object} `context` Object with values/attributes to add to the generated elements:
 * @param {String} `path`
 * @param {String} `alt`
 *
 *
 * Example
 * {{picture  "project/creakyOldJPEG.jpg" "lorem ipsum"}}
 *
 * Outputs
 * <picture class="image">
 *   <source srcset="assets/webp/project/creakyOldJPEG.webp" type="image/webp">
 *   <source srcset="assets/img/project/creakyOldJPEG.jpg" type="image/jpeg">
 *   <img src="assets/img/project/creakyOldJPEG.jpg" alt="lorem ipsum">
 * </picture>
 *
 */

module.exports = function(path, alt, options) {
  var picture = '';

  var imgPath = '../assets/img/' + path;
  var webpPath = '../assets/webp/';
  var removeExt = path;
  removeExt = removeExt
    .split('.')
    .slice(0, -1)
    .join('.');
  removeExt += '.webp';
  webpPath += removeExt;

  // Lazy Loading
  // Custom Class
  // Data-src?

  picture += '<picture class="image">\n';
  picture += '<source srcset="' + webpPath + '" type="image/webp">\n';
  picture += '<source srcset="' + imgPath + '" type="image/jpeg">\n';
  picture +=
    '<img src="' + imgPath + '" alt="' + alt + '" class="paper full-width">\n';
  picture += '</picture>';

  return new Handlebars.SafeString(picture);
};
