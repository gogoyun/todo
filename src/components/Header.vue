<script setup lang="ts">
	import BackArrowIcon from './icons/BackArrowIcon.vue';
</script>
<template>
<header>
  <img src="@/assets/images/header_circle.png" class="header-bg" />
  <div class="top pt-16 px-6">
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