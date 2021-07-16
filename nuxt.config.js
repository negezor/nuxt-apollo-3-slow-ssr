module.exports = {
    plugins: [
        '~/plugins/composition.js',
        '~/plugins/apollo.js'
    ],
    build: {
        transpile: ['@vue/apollo-composable']
    }
};
