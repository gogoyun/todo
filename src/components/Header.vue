<script setup lang="ts">
	import { computed } from 'vue';
import BackArrowIcon from './icons/BackArrowIcon.vue';
  import { useRoute } from 'vue-router'
  const route = useRoute();
  const showArrow = computed(() => {
    if (route.name === 'list') {
      return 'hidden';
    }
  })
</script>
<template>
<header>
  <img src="@/assets/images/header_circle.png" class="header-bg" />
  <div class="top pt-16 px-6" :class="showArrow">
		<button class="btn btn-ghost p-0"><BackArrowIcon /></button>
	</div>
</header>
</template>
<style scoped>
.header-bg {
  position: absolute;
  top: 0;
  left: 0;
}
</style>