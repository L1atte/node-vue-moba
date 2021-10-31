/*
 * @Author: Latte
 * @Date: 2021-10-07 11:08:16
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-31 19:56:36
 * @FilePath: \web\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import Article from "../views/Article.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: Main,
		children: [
			{ path: "/", name: "home", component: Home },
			{
				path: "/article/:id",
				name: "article",
				component: Article,
				props: true,
			},
		],
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
