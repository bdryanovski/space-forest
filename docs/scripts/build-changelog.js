var Changelog = require('generate-changelog')
var Fs = require('fs')

var basicConfig = {
  repoUrl: 'https://github.com/bdryanovski/space-forest',
}
Changelog.generate(Object.assign(basicConfig, {format: 'json'})).then(function(log) {
  Fs.writeFileSync('./changelog.json', JSON.stringify(log))
})

Changelog.generate(Object.assign(basicConfig)).then(function(log) {
  // DONT write it
  //Fs.writeFileSync('./CHANGELOG.md', log)
})
