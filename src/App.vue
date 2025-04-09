<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img src="@/assets/images/header-circle.png" alt="header bg" class="header-bg" />
  </header>
  <RouterView />
</template>

<style scoped>
.header-bg {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
