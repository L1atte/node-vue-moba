/*
 * @Author: Latte
 * @Date: 2021-10-07 11:16:09
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-11 22:44:29
 * @FilePath: \admin\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "main",
		component: Main,
		children: [
			{
				path: "categories/create",
				component: () => import("../views/CategoryEdit.vue"),
			},
			{
				path: "categories/list",
				component: () => import("../views/CategoryList.vue"),
			},
			{
				path: "categories/edit/:id",
				component: () => import("../views/CategoryEdit.vue"),
				props: true,
			},
			{
				path: "items/create",
				component: () => import("../views/ItemEdit.vue"),
			},
			{
				path: "items/list",
				component: () => import("../views/ItemList.vue"),
			},
			{
				path: "items/edit/:id",
				component: () => import("../views/ItemEdit.vue"),
				props: true,
			},
			{
				path: "heroes/create",
				component: () => import("../views/HeroEdit.vue"),
			},
			{
				path: "heroes/list",
				component: () => import("../views/HeroList.vue"),
			},
			{
				path: "heroes/edit/:id",
				component: () => import("../views/HeroEdit.vue"),
				props: true,
			},
			{
				path: "articles/create",
				component: () => import("../views/ArticleEdit.vue"),
			},
			{
				path: "articles/list",
				component: () => import("../views/ArticleList.vue"),
			},
			{
				path: "articles/edit/:id",
				component: () => import("../views/ArticleEdit.vue"),
				props: true,
			},
		],
	},
];

const router = new VueRouter({
	routes,
});

export default router;
