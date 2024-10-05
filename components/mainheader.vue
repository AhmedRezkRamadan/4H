<template>
   <header
    :class="{'scrolled': isScrolled}"
    class=" dark:!bg-black  group [&.scrolled]:!h-[50px] flex items-center justify-between w-full max-h-[100px] p-[20px] bg-white !border-b border-[#7E1A00] fixed top-0 z-[100]">
    <div class="flex items-center justify-center gap-[15px]">
      <nuxt-link :to="{name:'index'}">
        <img class=" w-[128px] h-[98px]  group-[.scrolled]:w-[64px] group-[.scrolled]:h-[49px]" src="/public/icons/cropped-Document-20.png" alt="logo">
      </nuxt-link>
      <div class="flex flex-col items-center justify-center p-[10px] group-[.scrolled]:!flex-row  group-[.scrolled]:!gap-[15px]  " >
        <div class="relative">
<span class="absolute top-[-15px] right-[5px] p-[5px] w-auto text-center text-black font-bold " v-if="cart.item.length > 0">{{ cart.item.length }}</span>
        <nuxt-link to="/cart">
        <svg class="  w-[30px] h-[30px] mt-1 " stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
        </svg>
      </nuxt-link>
    </div>
        <div class="price font-bold" >{{$t("curncy")}}  {{cart.totalPrice.toFixed(2)}}</div>
      </div>
    </div>
    <div class="flex gap-[70px] ">
      <div class="flex items-center justify-center gap-[35px] ">
        <nuxt-link class="font-bold" :to="{name:'index'}">{{ $t('home') }}</nuxt-link>
        <nuxt-link class="font-bold" :to="{name:'service'}">{{$t("service")}}</nuxt-link>
        <nuxt-link class="font-bold" :to="{name:'about'}">{{$t("about")}}</nuxt-link>
        <!-- <nuxt-link class="font-bold" :to="{name:'gallary'}">{{$t("Gallary")}}</nuxt-link> -->
        <nuxt-link class="font-bold" :to="{name:'prodaucts'}">{{$t("store")}}</nuxt-link>
      </div>
      <div class="flex items-center justify-center gap-[15px]">
        <v-btn class="!bg-[#7E1A00] text-white rounded-[15px] py-[10px] px-[20px] h-[50px]" variant="tonal !font-bold" :to="'/contact'">
          {{$t("contact")}}
        </v-btn>
        <v-menu>
          <template v-slot:activator="{ props }">
            <svg class="h-[23px] w-[30px]" v-bind="props" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" stroke-width="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"></path>
            </svg>
            
            <template>
              <v-switch 
                v-model="styileDark.isDark"
                hide-details
                inset
              ></v-switch>
            </template>
            
            
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
              @click="$i18n.locale=item.key"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </header>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import useCardStore from '~/store/cardStore';
import useInfoStore from '~/store/infoStore';


const isScrolled = ref(false);
const cart = useCardStore();

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};


onMounted(() => {
  console.log("onMounted called");
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
const items = [
  { title: 'عربي', key: 'ar' },
  { title: 'English', key: 'en' },
];
const styileDark = useInfoStore();


</script>

<style scoped>
* {
  text-transform: capitalize;
}
a:active {
  border-bottom: #7e1a00 solid 1px;
}
</style>
