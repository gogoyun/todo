<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AddIcon from '@/components/icons/AddIcon.vue'
import ListItems from './ListItems.vue';
import { getTodos } from '@/services/axios';
import { useUserStore } from '@/stores';
const storeUser = useUserStore();
const listData = ref([]);
onMounted(async()=> {
	await getTodos().then(res=> {
		listData.value = res.data.data;
	})
})
</script>

<template>
	<div class="flex flex-col justify-center content-center items-center text-center">
		<div class="avatar mt-14">
			<div class="w-28 h-28 rounded-full overflow-hidden">
				<img src="@/assets/images/avatar.jpg" class="object-cover w-full h-full" />
			</div>
		</div>
		<h1 class="text-xl font-medium mt-4 mb-1">Welcome {{ storeUser.userData.name }}!</h1>
		<img src="@/assets/images/list_pic.png" class="inline-block mx-auto" alt="welcome back!">
	</div>
	<div class="flex flex-col flex-1">
		<h2 class="text-xl mb-6">Todo  Tasks.</h2>
		<div class="flex flex-col bg-base-100 rounded-3xl shadow-md px-[31px]  pt-2 pb-6 text-[13px] h-full max-h-[240px]">
			<div class="flex justify-between items-center mb-2">
				<div class="font-medium opacity-34">Dairy  Tasks.</div>
				<button class="btn btn-ghost p-1"><AddIcon /></button>
			</div>
			<ListItems :list-data="listData" v-if="listData.length" />
		</div>
	</div>
</template>