<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import listBg from '@/assets/images/list_bg.png'
const route = useRoute();
const backgroundStyle = computed(() => {
  if (route.name === 'list') {
    return { background: `url(${listBg}) no-repeat` };
  } else {
    return { background: 'none' };
  }
});
</script>

<template>
  <div class="flex flex-1 flex-col justify-between" :style="backgroundStyle">
    <Header />
    <RouterView />
  </div>
</template>