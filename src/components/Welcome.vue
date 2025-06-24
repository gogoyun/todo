<script setup lang="ts">
	import { useI18n } from 'vue-i18n';
	const { t } = useI18n();
	import { useRouter } from 'vue-router';
	const router = useRouter();
</script>

<template>
	<div class="text-center">
		<img src="@/assets/images/home_main_image.png" class="inline-block mx-auto mt-20 mb-20" alt="Get things done with TODo">
		<h1 class="text-xl mb-8">{{ t('welcome.title') }}</h1>
		<div class="mx-12">
			<p class="text-sm/5">{{ t('welcome.description') }}</p>
		</div>
	</div>
	<div class="bottom text-center">
		<button class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px] mb-14" @click="router.push('/')">{{ t('welcome.button') }}</button>
	</div>
</template>
<style scoped>
</style>