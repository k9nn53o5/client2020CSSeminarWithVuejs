import Main from './views/Index.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const routers = [
	{
		path: '*',
		redirect: '/',
	},
	{
		path: '/',
		meta: {
			title: 'main page'
		},
		component: Main,

	},
	{
		path: '/login/:role',
		meta: {
			title: 'login'
		},
		component: Login,
		props: true,
	},
	{
		path: '/register/:role',
		meta: {
			title: 'register'
		},
		component: Register,
		props: true,
	}
]
export default routers;