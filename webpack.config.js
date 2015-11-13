module.exports = {
    entry: "./js/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css/, loaders: ['style', 'css'] },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { cacheDirectory: true, presets: ['es2015'] }}
        ]
    }
};
