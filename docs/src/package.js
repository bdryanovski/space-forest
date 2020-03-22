const P = require('../../package.json')

var PKG = {
  getVersion() {
    return P.version
  },
  getName() {
    return P.name
  },
  getRepository() {
    return P.repository.url
  },
  getHome() {
    return P.homepage
  },
  getPackageAndVersion() {
    return `${PKG.getName()}@${PKG.getVersion()}`
  },
  npmInstall() {
    return `npm install ${PKG.getPackageAndVersion()}`
  },
  yarnInstall() {
    return `yarn add ${PKG.getPackageAndVersion()}`
  }
}

module.exports = PKG