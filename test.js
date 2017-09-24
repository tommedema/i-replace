const iReplace = require('./src')
const haystack = '<HEAD></HEAD>'
const needle = '</head'
const replacement = '<style>body { margin: 0}</style>$1'
console.log(iReplace(haystack, needle, replacement))
