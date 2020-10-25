import Main from './views/Index.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ListRestaurants from './views/ListRestaurants.vue'
import MenusInRestaurant from './views/MenusInRestaurant.vue'
import RestaurantMain from './views/RestaurantMain.vue'
import OrderDetail from './views/OrderDetail.vue'
import OrdersOfDeliveryman from './views/OrdersOfDeliveryman.vue'
import UpdateInfo from './views/UpdateInfo.vue'
import UpdateMenu from './views/UpdateMenu.vue'
import CAccount from './components/ClientAccount.vue'

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
		path: '/customers/:cid/list',
		meta: {
			title: 'list_restaurants'
		},
		component: ListRestaurants,
	},
	{
		path: '/customers/:cid/list/:rid/menus',
		meta: {
			title: 'list_restaurants_menus'
		},
		component: MenusInRestaurant,
		props: true,
	},

	{
		path: '/restaurants/list',
		meta: {
			title: 'list_restaurants_order_it_get'
		},
		component: RestaurantMain,
		props: true,
	},
	{
		path: '/restaurants/list/:oid/food',
		meta: {
			title: 'list_restaurants_food_in_order'
		},
		component: OrderDetail,
		props: true,
	},
	{
		path: '/restaurants/updateInfo',
		meta: {
			title: 'update_restaurants_info'
		},
		component: UpdateInfo,
		props: true,
	},
	{
		path: '/restaurants/updateMenu',
		meta: {
			title: 'update_restaurants_menu'
		},
		component: UpdateMenu,
		props: true,
	},

	{
		path: '/deliverymans/list',
		meta: {
			title: 'list_orders_that_need_to_carry' 
		},
		component: OrdersOfDeliveryman,
		props: true,
	},
	{
		path: '/deliverymans/list/:oid/order',
		meta: {
			title: 'the_order_detail' 
		},
		component: OrderDetail,
		props: true,
	},

	{
		path: '/test',
		meta: {
			title: 'test' 
		},
		component:CAccount,
	}
]
export default routers;