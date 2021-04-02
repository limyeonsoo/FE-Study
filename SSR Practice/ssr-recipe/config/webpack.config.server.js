const paths = require('./paths');

module.exports = {
    mode: 'production',         // production mode
    entry : paths.ssrIndexJs,   // Entry
    target: 'node',             // node environment
    output: {                   // dest information
        path : paths.ssrBuild,
        filename : 'server.js',
        chunkFilename : 'js/[name].chunk.js',
        publicPath : paths.servedPath,
    }
}