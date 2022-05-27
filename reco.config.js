module.exports = {
    base: '/blog/', // ①添加base, 为了后面访问的时候有上下文，没有这玩意儿，你访问就会出问题
    title: '欢迎你，这是我的博客！', // ②修改title，自己看着办哈
    description: 'Enjoy when you can, and endure when you must.',
    dest: 'docs/.vuepress/dist', // ③修正dest目标路径为docs/.vuepress/dist，这个必须和稍后的自动部署的local_dir保持一致
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        [
            'meta',
            { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }
        ]
    ],
    theme: 'reco',
    themeConfig,
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress/medium-zoom', 'flowchart']
};
