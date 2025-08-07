import { createStore } from "vuex"

export default createStore({
	state: {
		// Define your state here
		username: null,
		roles: [],
		authrorized: false
	},
	getters: {
		// Define your getters here
		getUserName: state => state.username,
		getRoles: state => state.roles,
		getAuth: state => state.authrorized,
	},
	mutations: {
		setUser(state, user) {
			state.username = user.username;
			state.roles = user.roles;
			state.authrorized = true;
		},
		logout(state) {
			state.username = null;
			state.roles = [];
			state.authrorized = false;
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
