<script setup lang="ts">
</script>

<template>
	<div class="flex flex-col justify-center content-center text-center">
		<h1 class="text-xl mt-2 mb-6">Welcome Onboard!</h1>
		<img src="@/assets/images/add_pic.png" class="inline-block mx-auto my-6" alt="welcome back!">
		<p class="text-sm/6 text-primary pb-8">Add What your want to do later on..</p>
		<fieldset class="fieldset flex flex-col grow gap-7 mb-5">
			<input type="text" class="input w-full h-[47px] border-0 rounded-[11px]">
			<input type="text" class="input w-full h-[47px] border-0 rounded-[11px]">
			<input type="text" class="input w-full h-[47px] border-0 rounded-[11px]">
		</fieldset>
		<div class="mt-2 mb-10"><button class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px]">Add to list</button></div>
	</div>
</template>
<style scoped>
</style>