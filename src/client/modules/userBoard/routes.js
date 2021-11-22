const baseRoute = '/user';

export default [
	{
		path: `${baseRoute}/:username`,
		name: 'userBoard',
		component: () => import('./UserBoard.vue')
	},
];