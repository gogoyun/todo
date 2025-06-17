<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AddIcon from '@/components/icons/AddIcon.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import ListItems from './ListItems.vue';
import { getTodos } from '@/services/axios';
import { useUserStore, useListStore } from '@/stores';
import { useRouter } from 'vue-router';
const router = useRouter();
const storeUser = useUserStore();
const storeList = useListStore();
const editMode = ref(false);
const changeEditMode = () => {
	editMode.value = !editMode.value
}
onMounted(async()=> {
	await getTodos().then(res=> {
		storeList.$state.listData = res.data.data;
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
				<div>
					<button class="btn btn-ghost p-1 px-2" @click="changeEditMode()"><EditIcon /></button>
					<button class="btn btn-ghost p-1" @click="router.push('/add')"><AddIcon /></button>
				</div>
			</div>
			<ListItems :edit-mode="editMode" v-if="storeList.$state.listData.length" />
		</div>
	</div>
</template>