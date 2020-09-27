import Main from './views/Index.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ListRestaurants from './views/ListRestaurants.vue'
import MenusInRestaurant from './views/MenusInRestaurant.vue'


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
	},
	{
		path: '/customer/list',
		meta: {
			title: 'list_restaurants'
		},
		component: ListRestaurants,
	},
	{
		path: '/customer/list/:rid/menus',
		meta: {
			title: 'list_restaurants_menus'
		},
		component: MenusInRestaurant,
		props: true,
	}
]
export default routers;