<template>
	<div class="home">
		<h1>Home Page</h1>
		<p>Welcome {{ username }}!</p>
	</div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const userStore = useStore();
const username = computed(() => userStore.getters.getUserName);
</script>

<style scoped>
.home {
	padding: 2rem;
	text-align: center;
}
</style>
