<script setup>
import { ref, onMounted, computed } from 'vue'
import SuccessIcon from '@/components/icons/SuccessIcon.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import WarningIcon from '@/components/icons/WarningIcon.vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import { useToastStore } from '@/stores'
const storeToast = useToastStore();
// show animation
const showAnimation = computed(() => 
	storeToast.toastData.status
	? 'animate-jump animate-duration-500 animate-ease-in-out'
	: 'animate-jump-out animate-duration-300 animate-ease-out'
)
onMounted(() => {
	setTimeout(() => {
		storeToast.toastData.status = false;
	}, storeToast.toastData.ms);
})

</script>
<template>
	<div class="toast toast-center toast-middle animate-once" :class="showAnimation">
		<div role="alert" class="alert">
			<SuccessIcon v-if="storeToast.toastData.type == 'success'" />
			<InfoIcon v-if="storeToast.toastData.type == 'info'" />
			<WarningIcon v-if="storeToast.toastData.type == 'warning'" />
			<ErrorIcon v-if="storeToast.toastData.type == 'error'" />
			<span>{{ storeToast.toastData.message }}</span>
		</div>
	</div>
</template>


<style>

</style>