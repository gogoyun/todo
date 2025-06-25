<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { postRegister, postLogin } from '@/services/axios'
import { useRouter } from 'vue-router'
const router = useRouter();
import { useToastStore, useUserStore } from '@/stores';
const storeToast = useToastStore();
const storeUser = useUserStore();
const schema = yup.object({
	nickname: yup.string().required(t('validate.name.required')),
	email: yup.string().email(t('validate.email.error')).required(t('validate.email.required')),
	password: yup.string().required(t('validate.password.required')).min(6, t('validate.password.min')).max(8, t('validate.password.max')),
	passwordConfirm: yup.string().oneOf([yup.ref('password')], t('validate.passwordConfirm.error')).required(t('validate.passwordConfirm.required'))
})

const { handleSubmit, errors, defineField } = useForm({
	validationSchema: schema,
	initialValues: {
		nickname: '',
		email: '',
		password: '',
		passwordConfirm: ''
	}
})
const [nickname] = defineField('nickname');
const [email] = defineField('email');
const [password] = defineField('password');
const [passwordConfirm] = defineField('passwordConfirm');
const formSubmit = handleSubmit(async(values) => {
	await postRegister({
		email: values.email,
		password: values.password,
		name: values.nickname,
	}).then(async(res) => {
		console.log('res', res);
		if (res?.data.code === 200) {
			//取得token
			try {
				const loginRes = await postLogin({
					email: values.email,
					password: values.password,
				});
				//儲存token
				storeUser.userData = {
					email: values.email,
					name: values.nickname,
					token: loginRes.data.data.access_token,
				};
				storeToast.toastData = {
					status: true,
					type: 'success',
					message: t('validate.success.signup'),
					ms: 3000
				};
				router.replace('/');
			} catch (loginError) {
				console.log('login error', loginError);
				storeToast.toastData = {
					status: true,
					type: 'error',
					message: t('validate.login.error'),
					ms: 3000
				};
			}
		}
	}).catch(error => {
		switch (error.status) {
			case 400:
				storeToast.toastData = {
					status: true,
					type: 'warning',
					message: t('validate.email.already'),
					ms: 3000
				};
				break;
			default:
				storeToast.toastData = {
					status: true,
					type: 'error',
					message: t('validate.email.error'),
					ms: 3000
				};
		}
	});
},(errors) => {
	console.log("errors", errors);
})
</script>

<template>
	<form @submit.prevent="formSubmit" class="flex flex-1 flex-col justify-between content-center">
		<div class="flex flex-col justify-center content-center">
			<h1 class="text-xl text-center mt-12 mb-6">{{ t('signup.welcome') }}</h1>
			<p class="text-sm/6 text-primary text-center pb-12">{{ t('signup.subtitle') }}</p>
				<fieldset class="fieldset flex flex-col mt-3 mb-5">
					<div>
						<input type="text" class="input w-full h-[47px] border-0 rounded-[11px]" :placeholder="t('signup.fullNamePlaceholder')" v-model="nickname" name="nickname">
						<div class="error-text mt-1 px-1 h-[18px]">{{ errors.nickname }}</div>
					</div>
					<div>
						<input type="email" class="input w-full h-[47px] border-0 rounded-[11px]" :placeholder="t('signup.emailPlaceholder')" v-model="email" name="email">
						<div class="error-text mt-1 px-1 h-[18px]">{{ errors.email }}</div>
					</div>
					<div>
						<input type="password" class="input w-full h-[47px] border-0 rounded-[11px]" :placeholder="t('signup.passwordPlaceholder')" v-model="password" name="password">
						<div class="error-text mt-1 px-1 h-[18px]">{{ errors.password }}</div>
					</div>
					<div>
						<input type="password" class="input w-full h-[47px] border-0 rounded-[11px]" :placeholder="t('signup.confirmPasswordPlaceholder')" v-model="passwordConfirm" name="passwordConfirm">
						<div class="error-text mt-1 px-1 h-[18px]">{{ errors.passwordConfirm }}</div>
					</div>
				</fieldset>
		</div>
		<div class="bottom text-center">
			<button type="submit" class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px] mb-14">{{ t('signup.submitButton') }}</button>
			<div class="flex justify-center items-center text-[15px]">
				<p class="opacity-62">{{ t('signup.haveAccount') }}</p>
				<button type="button" class="btn btn-link opacity-100">{{ t('signup.signIn') }}</button>
			</div>
		</div>
	</form>
</template>
<style scoped>
</style>