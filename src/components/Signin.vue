<script setup lang="ts">
</script>

<template>
	<div class="flex flex-col justify-center content-center text-center">
		<h1 class="text-xl mt-12 mb-6">Welcome Back!</h1>
		<img src="@/assets/images/login_pic.png" class="inline-block mx-auto" alt="welcome back!">
		<fieldset class="fieldset flex flex-col grow gap-7 mt-3 mb-8">
			<input type="email" class="input w-full h-[47px] border-0 rounded-[11px]" placeholder="Enter your Email address">
			<input type="password" class="input w-full h-[47px] border-0 rounded-[11px]" placeholder="Confirm your Password">
		</fieldset>
		<button class="btn btn-link font-normal">Forgot Password ?</button>
	</div>
	<div class="bottom text-center">
		<button class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px] mb-14">Sign Up</button>
		<div class="flex justify-center items-center text-[15px]">
			<p class="opacity-62">Dont have an account ?</p>
			<button class="btn btn-link opacity-100">Sign Up</button>
		</div>
	</div>
</template>
<style scoped>
</style>