import { createStore } from "vuex"

export default createStore({
	state: {
		// Define your state here
		username: null,
		roles: [],
		authorized: false,
		status: null,
	},
	getters: {
		// Define your getters here
		getUserName: state => state.username,
		getRoles: state => state.roles,
		getAuth: state => state.authorized,
	},
	mutations: {
		setUser(state, user) {
			state.username = user.username;
			state.roles = user.roles;
			state.authorized = true;
			state.status = user.status;
		},
		logout(state) {
			state.username = null;
			state.roles = [];
			state.authorized = false;
			state.status = null;
		}
		// Define your mutations here
	},
	actions: {
		// Define your actions here
	},
	modules: {
		// Define your modules here
	},
})
