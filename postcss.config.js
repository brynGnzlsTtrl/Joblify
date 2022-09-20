module.exports = {
    plugins: [
        require("postcss-preset-env"),
        require("postcss-import"),
        require("autoprefixer"),
        // require("@fullhuman/postcss-purgecss")({
        //     content: ['./dist/index.html']
        // })

    ]
}