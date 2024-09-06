import { createRouter, createWebHistory } from "vue-router";
import home from './modules/home'
import canvasTry from './modules/canvasTry'

const routes = [
	{
		path: '/helloworld',
		name: 'HelloWorld',
		component: () => import('@/components/HelloWorld.vue')
	},
	...home,
	...canvasTry
]

const router = createRouter({
	history: createWebHistory('/demo'),
	routes
})

export default router