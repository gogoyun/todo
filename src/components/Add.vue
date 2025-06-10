<script setup lang="ts">
import { useForm, Field } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const schema = yup.object({
	titles: yup.array()
		.of(
			yup.object({
				titles: yup.string().nullable(),
			})
		)
		.test(
			'must-one-title', // 定義驗證規則名稱
			t('validate.titleRequired'), // 當驗證失敗時顯示的錯誤訊息
			(value) => {
				// 如果整個陣列不存在或為空，直接返回 false
				if (!value || value.length === 0) {
					return false;
				}
				// 其中一個有值返回true
				return value.some(item => item && item.title && item.title.trim() !== '');
			}
		),
});
const { handleSubmit, errors } = useForm({
	validationSchema: schema,
})
const formSubmit = handleSubmit(async(values) => {
	console.log(values);
},(errors) => {
	console.log("errors", errors);
})
</script>

<template>
	<form @submit.prevent="formSubmit">
		<div class="flex flex-col justify-center content-center text-center">
			<h1 class="text-xl mt-2 mb-6">Welcome Onboard!</h1>
			<img src="@/assets/images/add_pic.png" class="inline-block mx-auto my-6" alt="welcome back!">
			<p class="text-sm/6 text-primary pb-8">Add What your want to do later on..</p>
			<fieldset class="fieldset flex flex-col grow gap-7 mb-5">
				<div v-for="index in 3">
					<Field type="text" class="input w-full h-[47px] border-0 rounded-[11px]" :name="`titles[${index-1}].title`" />
				</div>
			</fieldset>
			<div class="mt-2 mb-10">
				<button type="submit" class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px]">Add to list</button>
				<div class="error-text mt-1 px-1 h-[18px]">{{ errors.titles }}</div>
			</div>
		</div>
	</form>
</template>
<style scoped>
</style>