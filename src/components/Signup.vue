<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { postRegister } from '@/services/axios'
import { useRouter } from 'vue-router'
const router = useRouter();
import { useToastStore } from '@/stores';
const storeToast = useToastStore();
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
	}).then(res => {
		switch (res.status) {
			case 200:
				storeToast.toastData = {
					status: true,
					type: 'success',
					message: t('validate.success'),
					ms: 3000
				};
				router.replace('/');
				break;
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
			<h1 class="text-xl text-center mt-12 mb-6">Welcome Onboard!</h1>
			<p class="text-sm/6 text-primary text-center pb-12">Let’s help you meet up your task</p>
				<fieldset class="fieldset flex flex-col mt-3 mb-5">
					<div>
						<input type="text" class="input w-full h-[47px] border-0 rounded-[11px]" placeholder="Enter your Full Name" v-model="nickname" name="nickname">
						<div class="error-text mt-1 px-1 h-[18px]">{{ errors.nickname }}</div>
					</div>
					<div>
						<input type="email" class="input w-full h-[47px] border-0 rounded-[11px]" placeholder="Enter your Email address" v-model="email" name="email">
						<div class="error-text mt-1 px-1 h-[18px]">{{ errors.email }}</div>
					</div>
					<div>
						<input type="password" class="input w-full h-[47px] border-0 rounded-[11px]" placeholder="Create a Password" v-model="password" name="password">
						<div class="error-text mt-1 px-1 h-[18px]">{{ errors.password }}</div>
					</div>
					<div>
						<input type="password" class="input w-full h-[47px] border-0 rounded-[11px]" placeholder="Confirm your Password" v-model="passwordConfirm" name="passwordConfirm">
						<div class="error-text mt-1 px-1 h-[18px]">{{ errors.passwordConfirm }}</div>
					</div>
				</fieldset>
		</div>
		<div class="bottom text-center">
			<button type="submit" class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px] mb-14">Sign Up</button>
			<div class="flex justify-center items-center text-[15px]">
				<p class="opacity-62">Already have an account ?</p>
				<button type="button" class="btn btn-link opacity-100">Sign In</button>
			</div>
		</div>
	</form>
</template>
<style scoped>
</style>