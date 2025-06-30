<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import LockIcon from '@/components/icons/LockIcon.vue'
import { postReset } from '@/services/axios'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute();
import { useToastStore } from '@/stores';
const storeToast = useToastStore();
const resetToken = route.query.token;
const schema = yup.object({
	password: yup.string().required(t('validate.password.required')).min(6, t('validate.password.min')).max(8, t('validate.password.max')),
	passwordConfirm: yup.string().oneOf([yup.ref('password')], t('validate.passwordConfirm.error')).required(t('validate.passwordConfirm.required'))
})

const { handleSubmit, errors, defineField, isSubmitting } = useForm({
	validationSchema: schema,
	initialValues: {
		password: '',
		passwordConfirm: ''
	}
})
const [password] = defineField('password');
const [passwordConfirm] = defineField('passwordConfirm');
const formSubmit = handleSubmit(async(values) => {
	await postReset({
		token: resetToken,
		new_password: values.password
	}).then(async(res) => {
		if (res?.data.code === 200) {
			router.replace('/reset-success');
		}
	}).catch(error => {
		if (error.status) {
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
onMounted(()=> {
	if (!route.query.token) {
		router.replace('/404');
	};
})
</script>

<template>
	<form @submit.prevent="formSubmit" class="w-full">
		<div class="flex flex-col">
			<div class="inline-block mx-auto"><LockIcon /></div>
			<h1 class="text-xl text-center mt-12 mb-6">{{ t('reset.title') }}</h1>
			<fieldset class="fieldset flex flex-col mt-3 mb-5">
				<div>
					<input type="password" class="input w-full h-[47px] border-0 rounded-[11px]" :placeholder="t('reset.passwordPlaceholder')" v-model="password" name="password">
					<div class="error-text mt-1 px-1 h-[18px]">{{ errors.password }}</div>
				</div>
				<div>
					<input type="password" class="input w-full h-[47px] border-0 rounded-[11px]" :placeholder="t('reset.confirmPasswordPlaceholder')" v-model="passwordConfirm" name="passwordConfirm">
					<div class="error-text mt-1 px-1 h-[18px]">{{ errors.passwordConfirm }}</div>
				</div>
			</fieldset>
		</div>
		<div class="bottom text-center">
			<button type="submit" class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px] mb-14">{{ t('reset.submitButton') }}
				<span class="loading loading-spinner loading-xs" v-if="isSubmitting"></span>
			</button>
		</div>
	</form>
</template>
<style scoped>
</style>