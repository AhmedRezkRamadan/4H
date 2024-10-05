<template>  
  <div :class="styileDark.isDark ? 'dark':'' " 
  >
  <nuxt-layout>
      <NuxtPage/>
  </nuxt-layout>
</div>
</template>
<script setup>
import useInfoStore from '~/store/infoStore';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const styileDark = useInfoStore();

</script>
<style>
</style>

