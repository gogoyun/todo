<script setup lang="ts">
import { useForm } from 'vee-validate'
import MailIcon from '@/components/icons/MailIcon.vue'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { postForgot } from '@/services/axios'
import { useRouter } from 'vue-router'
const router = useRouter();
import { useToastStore } from '@/stores';
const storeToast = useToastStore();
const schema = yup.object({
	email: yup.string().email(t('validate.email.error')).required(t('validate.email.required')),
})

const { handleSubmit, errors, defineField, isSubmitting } = useForm({
	validationSchema: schema,
	initialValues: {
		email: '',
	}
})
const [email] = defineField('email');
const formSubmit = handleSubmit(async(values) => {
	//取得token
	await postForgot({
		email: values.email,
	}).then(res => {
		if (res?.data.code === 200) {
			storeToast.toastData = {
				status: true,
				type: 'success',
				message: t('validate.success.sendEmail'),
				ms: 3000
			};
		}
	}).catch(error => {
		storeToast.toastData = {
			status: true,
			type: 'error',
			message: t('validate.error.apiFaild'),
			ms: 3000
		};
	});
},(errors) => {
	console.log("errors", errors);
})
</script>

<template>
	<form @submit.prevent="formSubmit" class="w-full">
		<div class="flex flex-col justify-center content-center text-center">
			<div class="inline-block mx-auto"><MailIcon /></div>
			<h1 class="text-xl text-center mt-12 mb-2">{{ t('forgot.title') }}</h1>
			<p class="mt-6 font-medium text-pretty text-gray-500">{{ t('forgot.subtitle') }}</p>
			<fieldset class="fieldset flex flex-col mt-3 mb-5">
				<div>
					<input type="email" class="input w-full h-[47px] border-0 rounded-[11px]" :placeholder="t('forgot.emailPlaceholder')" v-model="email" name="email">
					<div class="error-text mt-1 px-1 h-[18px]">{{ errors.email }}</div>
				</div>
			</fieldset>
		</div>
		<div class="bottom text-center">
			<button type="submit" class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px] mb-14">{{ t('forgot.submitButton') }}
				<span class="loading loading-spinner loading-xs" v-if="isSubmitting"></span>
			</button>
			<div class="flex justify-center items-center text-[15px]">
				<p class="opacity-62">{{ t('forgot.haventAccount') }}</p>
				<button class="btn btn-link opacity-100" @click="router.push('/signup')">{{ t('forgot.signUp') }}</button>
			</div>
		</div>
	</form>
</template>
<style scoped>
</style>