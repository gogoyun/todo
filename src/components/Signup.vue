<script setup lang="ts">
</script>

<template>
	<div class="flex flex-col justify-center content-center text-center">
		<h1 class="text-xl mt-12 mb-6">Welcome Onboard!</h1>
		<p class="text-sm/6 text-primary pb-12">Let’s help you meet up your task</p>
		<fieldset class="fieldset flex flex-col grow gap-7 mt-5 mb-5">
			<input type="text" class="input w-full h-[47px] border-0 rounded-[11px]" placeholder="Enter your Full Name">
			<input type="email" class="input w-full h-[47px] border-0 rounded-[11px]" placeholder="Enter your Email address">
			<input type="password" class="input w-full h-[47px] border-0 rounded-[11px]" placeholder="Create a Password">
			<input type="password" class="input w-full h-[47px] border-0 rounded-[11px]" placeholder="Confirm your Password">
		</fieldset>
	</div>
	<div class="bottom text-center">
		<button class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px] mb-14">Sign Up</button>
		<div class="flex justify-center items-center text-[15px]">
			<p class="opacity-62">Already have an account ?</p>
			<button class="btn btn-link opacity-100">Sign In</button>
		</div>
	</div>
</template>
<style scoped>
</style>