import { createRouter, createWebHistory } from "vue-router"
import Login from "../views/Login.vue"
import store from "../store";

const routes = [
	{
		path: "/",
		name: "Login",
		component: Login,
	},
	{
		path: "/home",
		name: "Home",
		// Lazy loading for better performance
		component: () => import("../views/Home.vue"),
		beforeEnter: (to, from, next) => {
			const authorized = store.getters.getAuth;
			if (authorized) {
				return next();
			}
			return next("/not_found");
		}
	},
	{
		path: "/admin",
		name: "Admin",
		component: () => import("../views/AdminView.vue"),
		beforeEnter: (to, from, next) => {
			const roles = store.getters.getRoles;
			if (roles.includes('Admin')) {
				return next();
			}
			return next("/not_found");
		}
	},
	{
		path: "/editor",
		name: "Editor",
		component: () => import("../views/EditorView.vue"),
		beforeEnter: (to, from, next) => {
			const roles = store.getters.getRoles;
			if (roles.includes('Editor')) {
				return next();
			}
			return next("/not_found");
		}
	},
	{
		path: "/not_found",
		name: "NotFound",
		component: () => import("../views/NotFound.vue"),
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
