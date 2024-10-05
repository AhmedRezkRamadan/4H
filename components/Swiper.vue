<template>
<div class="containerPage">
    <slot />
  <Swiper
    :pagination="{
      dynamicBullets: true,
      clickable: true,
     }"
     :loop="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >

    <swiper-slide v-for="item in props.data2" class="!h-[540px] !flex !items-center !justify-center relative">

      <img :src="item.image" class="absolute object-cover h-full w-full"/>
<div class="bg-[#14141482] absolute z-[1] h-full w-full"></div>
<div class=" p-[50px] flex flex-col gap-10 justify-center items-center relative z-[2]">
<h1 class="font-bold text-7xl	text-white text-center" > {{ item.title }}</h1>
<div class="text-white font-semibold text-center" >{{item.description}}</div>
<v-btn  :to="'prodaucts'" class="!bg-[#7E1A00] !p-2 !rounded-lg !text-white !w-[150px] !h-[35px] " >{{item.btntitle}}</v-btn>
</div>

    </swiper-slide>
  </Swiper>
</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
const modules = [Pagination, Navigation];


const props = defineProps({
  data2:[],
})
</script>

<style>
/* Add your custom styles here */
.mySwiper {
  width: 100%;
  height: 100%;
}
</style>
