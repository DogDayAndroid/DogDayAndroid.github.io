module.exports = {
    // 插件配置
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ],
    // 多语言配置
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'DogDayAndroid安卓脱壳机',
            description: 'Simple, so charming.',
        },
        /*
        '/en/': {
            lang: 'en-US',
            title: 'DogDayAndroid Unpakcer',
            description: 'Simple, so charming.',
        },
        */
    },
    // 主题配置
    themeConfig: {
        logo:'https://avatars.githubusercontent.com/u/100076963?s=400&u=56309c2287f9675ec02fe6b66c44e2a025f94abf&v=4',
        nav: [
            { text: '项目介绍', link: '/' },
        ],
        sidebar: 'auto'
    }
}