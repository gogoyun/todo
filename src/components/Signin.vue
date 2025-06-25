<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { postLogin } from '@/services/axios'
import { useRouter } from 'vue-router'
const router = useRouter();
import { useToastStore, useUserStore } from '@/stores';
const storeToast = useToastStore();
const storeUser = useUserStore();
const schema = yup.object({
	email: yup.string().email(t('validate.email.error')).required(t('validate.email.required')),
	password: yup.string().required(t('validate.password.required')).min(6, t('validate.password.min')).max(8, t('validate.password.max')),
})

const { handleSubmit, errors, defineField } = useForm({
	validationSchema: schema,
	initialValues: {
		email: '',
		password: '',
	}
})
const [email] = defineField('email');
const [password] = defineField('password');
const formSubmit = handleSubmit(async(values) => {
	//取得token
	await postLogin({
		email: values.email,
		password: values.password,
	}).then(res => {
		if (res?.data.code === 200) {
			//儲存token
			storeUser.userData = {
				email: values.email,
				name: res.data.data.name,
				token: res.data.data.access_token,
			};
			storeToast.toastData = {
				status: true,
				type: 'success',
				message: t('validate.success.signin'),
				ms: 3000
			};
			router.replace('/');
		}
	}).catch(error => {
		switch (error.status) {
			case 400:
				storeToast.toastData = {
					status: true,
					type: 'warning',
					message: t('validate.error.signin'),
					ms: 3000
				};
				break;
			default:
				storeToast.toastData = {
					status: true,
					type: 'error',
					message: t('validate.error.apiFaild'),
					ms: 3000
				};
		}
	});
},(errors) => {
	console.log("errors", errors);
})
</script>

<template>
	<form @submit.prevent="formSubmit">
		<div class="flex flex-col justify-center content-center">
			<h1 class="text-xl text-center mt-12 mb-6">{{ t('signin.welcome') }}</h1>
			<img src="@/assets/images/login_pic.png" class="inline-block mx-auto" :alt="t('signin.welcome')">
			<fieldset class="fieldset flex flex-col mt-3 mb-5">
				<div>
					<input type="email" class="input w-full h-[47px] border-0 rounded-[11px]" :placeholder="t('signin.emailPlaceholder')" v-model="email" name="email">
					<div class="error-text mt-1 px-1 h-[18px]">{{ errors.email }}</div>
				</div>
				<div>
					<input type="password" class="input w-full h-[47px] border-0 rounded-[11px]" :placeholder="t('signin.passwordPlaceholder')" v-model="password" name="password">
					<div class="error-text mt-1 px-1 h-[18px]">{{ errors.password }}</div>
				</div>
			</fieldset>
			<button class="btn btn-link font-normal">{{ t('signin.forgotPassword') }}</button>
		</div>
		<div class="bottom text-center">
			<button type="submit" class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px] mb-14">{{ t('signin.submitButton') }}</button>
			<div class="flex justify-center items-center text-[15px]">
				<p class="opacity-62">{{ t('signin.haventAccount') }}</p>
				<button class="btn btn-link opacity-100" @click="router.push('/signup')">{{ t('signin.signUp') }}</button>
			</div>
		</div>
	</form>
</template>
<style scoped>
</style>