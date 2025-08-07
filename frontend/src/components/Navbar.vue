<template>
	<nav class="navbar">
		<router-link to="/" class="hover:text-gray-300">Login</router-link>
		<router-link to="/home" class="hover:text-gray-300">Home</router-link>
		<router-link to="/admin" class="hover:text-gray-300" v-if="roles.includes('Admin')">Admin</router-link>
		<router-link to="/editor" class="hover:text-gray-300" v-if="roles.includes('Editor')">Editor</router-link>
	</nav>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

const userStore = useStore();
const roles = computed(() => userStore.getters.getRoles);
</script>

<style scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	width: 250px;
	margin: 0 auto;
}
</style>
