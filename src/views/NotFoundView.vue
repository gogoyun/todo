<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>

<template>
  <main class="flex-1 flex items-center">
  <div class="w-full text-center">
    <p class="text-base font-semibold" :style="{color: 'var(--color-green)'}">404</p>
    <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">{{ t('notfound.title') }}</h1>
    <p class="mt-6 font-medium text-pretty text-gray-500">{{ t('notfound.subtitle') }}</p>
    <div class="mt-10 flex items-center justify-center">
      <button class="btn btn-md btn-wide bg-primary text-base-100 font-normal rounded-none h-[44px] mb-14" @click="router.replace('/')">{{ t('notfound.submitButton') }}</button>
    </div>
  </div>
</main>
</template>
<style scoped>
</style>