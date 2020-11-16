module.exports = {
	title: 'lView-UI',
	description: 'Just playing around',
	configureWebpack: {
		resolve: {
			alias: {
				'@': process.cwd(),
			},
		},
	},
	themeConfig: {
		// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
		repo: 'https://github.com/web-liuyang/lView-UI',
		// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
		// "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
		repoLabel: 'GitHub',
		nav: [
			{ text: '指南', link: '/guide/' },
			{ text: '组件', link: '/components/' },
			{
				text: 'uniapp',
				ariaLabel: 'uniapp Menu',
				items: [
					{ text: '组件', link: '/uniapp/components/' },
					{ text: 'SDK', link: '/uniapp/sdk/' },
				],
			},
		],
		lastUpdated: 'Last Updated'
	},
	plugins: [
		[
			'vuepress-plugin-auto-sidebar',
			{
				nav: true,
				sidebarDepth: 5,
				titleMode: 'titlecase',
				titleMap: {
					guide: '指南',
					components: '组件',
				},
			},
		],
		[
			'@vuepress/plugin-last-updated',
			{
				transformer: (timestamp, lang) => {
					// 不要忘了安装 moment
					const moment = require('moment');
					moment.locale(lang);
					return moment(timestamp).fromNow();
				},
			},
		],
		// require('../../plugin/vuepress-sidebar.js'),
	],
};
