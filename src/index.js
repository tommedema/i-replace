/**
 * Convenient case insensitive string replacement with optional multiple replacement.
 * @function iReplace
 * @param {string}    haystack      The string to search within.
 * @param {string}    needle        The string to search for within the haystack, case insensitive.
 * @param {string}    replacement   The string to replace the needle with.
 * [Regexp replacement strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) can be used here.
 * @param {boolean} [multi=false] Whether to enable multiple replacemement. Default is to only
 * replace the first occurence.
 * 
 * @example
 * const iReplace = require('i-replace')
 * const haystack = '<HEAD></HEAD>'
 * const needle = '</head'
 * const replacement = '<style>body { margin: 0}</style>$1'
 * console.log(iReplace(haystack, needle, replacement))
 * // outputs <HEAD><style>body { margin: 0}</style></HEAD>
 *
 * @returns {string} the haystack after needle replacement
 */
module.exports = function iReplace (haystack, needle, replacement, multi = false) {
  const mode = multi ? 'gi' : 'i'
  const re = new RegExp(`(${needle})`, mode)
  return haystack.replace(re, replacement)
}
