const { injectBabelPlugin } = require('react-app-rewired')

const rootImport = [
    "root-import",
    {
        rootPathPrefix: '@',
        rootPathSufix: 'src'
    }
]

module.exports = config => injectBabelPlugin( rootImport, config );