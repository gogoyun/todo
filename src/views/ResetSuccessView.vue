<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  import CheckIcon from '@/components/icons/CheckIcon.vue'
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>

<template>
  <main class="flex-1 flex items-center">
  <div class="w-full text-center">
    <div class="flex items-center justify-center text-base font-semibold" :style="{color: 'var(--color-green)'}"><CheckIcon /></div>
    <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">{{ t('resetsuccess.title') }}</h1>
    <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">{{ t('resetsuccess.subtitle') }}</p>
    <div class="mt-10 flex items-center justify-center">
      <button class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px] mb-14" @click="router.replace('/signin')">{{ t('resetsuccess.submitButton') }}</button>
    </div>
  </div>
</main>
</template>
<style scoped>
</style>