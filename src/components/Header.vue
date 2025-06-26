<script setup lang="ts">
	import { computed } from 'vue';
  import { useUserStore, useToastStore } from '@/stores';
  const storeUser = useUserStore();
  const storeToast = useToastStore();
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  import BackArrowIcon from './icons/BackArrowIcon.vue';
  import SignoutIcon from './icons/SignoutIcon.vue';
  import { useRoute, useRouter } from 'vue-router'
  const route = useRoute();
  const router = useRouter();
  const showArrow = computed(() => {
    if (route.name === 'list' || route.name === 'NotFound') {
      return 'hidden';
    }
  })
  const positionSignout = computed(() => {
    if(route.name === 'signin' || route.name === 'signup' || route.name === 'forgotpassword' || route.name === 'NotFound') {
      return 'hidden';
    }else if (route.name === 'list') {
      return 'top-6';
    }else{
      return 'top-16';
    }
  })
  const signOut = () => {
    storeUser.$state.userData = [];
    storeUser.preLoginPath = null;
    storeToast.$state.toastData = {
      status: true,
      type: 'success',
      message: t('validate.success.signout'),
      ms: 3000
    }
    router.replace('/signin');
  }
</script>
<template>
<header class="relative">
  <img src="@/assets/images/header_circle.png" class="header-bg" />
  <div class="pt-16 px-6" :class="showArrow">
		<button class="btn btn-ghost p-0" @click="router.go(-1);"><BackArrowIcon /></button>
	</div>
  <div class="absolute right-6" :class="positionSignout">
    <button class="btn btn-ghost p-0" @click="signOut()"><SignoutIcon /></button>
  </div>
</header>
</template>
<style scoped>
.header-bg {
  position: absolute;
  top: 0;
  left: 0;
}
.btn {
  position: relative;
}
</style>