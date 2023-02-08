const path = require('path')

const longPath = './productzilla//bootcamp///nodejs'
const normalizedPath = path.normalize(longPath)
console.log(normalizedPath);
