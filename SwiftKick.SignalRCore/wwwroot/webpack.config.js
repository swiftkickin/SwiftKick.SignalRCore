const config = {
    entry: './app.ts',
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', ".js", ".json"]
    },
    mode: "development"
};

module.exports = config;