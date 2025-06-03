<script setup>
import { ref, onMounted, computed } from 'vue'
import SuccessIcon from '@/components/icons/SuccessIcon.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import WarningIcon from '@/components/icons/WarningIcon.vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
const showToast = ref(false);
const showInfo = ref({
	type: '',
	message: '',
	ms: 3000
});
// show animation
const showAnimation = computed(() => 
  showToast.value
	? 'animate-jump animate-duration-500 animate-ease-in-out'
	: 'animate-jump-out animate-duration-300 animate-ease-out'
)
onMounted(() => {
	setTimeout(() => {
		showToast.value = false;
	}, showInfo.value.ms);
})

</script>
<template>
	<div class="toast toast-center toast-middle animate-once" :class="showAnimation">
		<div role="alert" :class="`alert alert-${showInfo.type}`">
			<SuccessIcon v-if="showInfo.type == 'success'" />
			<InfoIcon v-if="showInfo.type == 'info'" />
			<WarningIcon v-if="showInfo.type == 'warning'" />
			<ErrorIcon v-if="showInfo.type == 'error'" />
			<span>{{ showInfo.message }}</span>
		</div>
	</div>
</template>


<style>

</style>