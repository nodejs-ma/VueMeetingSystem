import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Index from '@/components/Index.vue'
import MeetReserve from '@/components/MeetReserve.vue'
import MeetShow from '@/components/MeetShow.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/register',
			name: 'Register',
			component: Register
		},
		{
			path: '/meetreserve',
			name: 'MeetReserve',
			component: MeetReserve
		},
		{
			path: '/meetshow',
			name: 'MeetShow',
			component: MeetShow
		}
	]
})
