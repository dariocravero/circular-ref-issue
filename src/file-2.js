// NOTE. This is the circular ref. File1 shouldn't be here.
var File1 = require('./file-1')
var File4 = require('./file-4')

module.exports = {
  src: 'File 2',
  etc: [File1, File4]
}

// // Removing the circular ref.
// var File4 = require('./file-4')

// module.exports = {
//   src: 'File 2',
//   etc: [File4]
// }
