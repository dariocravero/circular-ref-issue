var CircularRefIssue = {
  File1: require('./file-1'),
  File2: require('./file-2'),
  File3: require('./file-3')
}

window.CircularRefIssue = module.exports = CircularRefIssue
