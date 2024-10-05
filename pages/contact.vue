<template>
    <div class="containerPage">
    <div class="relative overflow-hidden p-6">
        <img src="/images/contactback.jpg" class=" absolute object-cover opacity-[30%] ">
    <div class=" z-[5]  felx items-center justify-center relative">
        <div class="flex items-center justify-center flex-col gap-3 mb-[50px]">
            <h1 class="text-[#7E1A00] text-[45px] font-bold ">{{$t('contactuspage') }} </h1>
            <p class=" text-[#686868] text-[14px]" >{{$t('sugestes')}}</p>
        </div>
        <div class="flex items-center justify-center gap-[90px]">
            <form action="" class="flex flex-col items-center justify-center w-[520px]  gap-8  ">
                <div>
                <label for="name" class="text-[#909090] ml-[5px] ">{{$t('Name')}}</label>
                <br>
                <input v-model="data.name" type="text" id="name" placeholder="  Name" class=" bg-white p-[10px] w-[520px] h-[34px] mt-[4px] border border-gray-500 rounded-lg   " >
            </div>
            <div>
                <label for="email" class="text-[#818181] ml-[5px]">{{$t('Email')}}</label>
                <br>
                <input type="email" v-model="data.email" id="email" placeholder="   Email" class="bg-white p-[10px] w-[520px] h-[34px] mt-[4px] border border-gray-500 rounded-lg   "  >
            </div>
            <div>
                <label for="message" class="text-[#818181] ml-[5px]">{{$t('message')}}</label>
                <br>
                <textarea id="message" v-model="data.message" placeholder="message" class=" p-[10px] w-[520px] h-[150px] border border-gray-500 rounded-lg bg-white "></textarea>
            </div>
            <v-btn class="w-[520px] p-[10px] h-[28px] !bg-[#7e1a00] text-white !font-bold" @click="submit">send</v-btn>
            </form>
            <div class="flex flex-col items-center justify-center gap-[30px]">
                <div class="up">
                <h1 class="font-extrabold text-[24px] text-[#7E1A00] ">{{$t('contact')}}!</h1>
                <p class="text-[#686868] text-[14px]">{{ $t('call') }} .</p>
            </div>
            <div class="flex items-center gap-[25px] w-full">
                <svg aria-hidden="true" class="max-w-[20px]  max-h-[20px] fill-[#7e1a00]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                <div>
                <p class="font-bold text-[#7E1A00] ">{{$t('phones')}}</p>
                <a href="tel:01050834809" class="text-[#686868] text-[14px]">01050834809</a> - 
                <a href="tel:01095388405" class="text-[#686868] text-[14px]">01095388405</a>
            </div>
            </div>
            <div class="flex items-center gap-[25px] w-full">
                <svg aria-hidden="true" class="max-w-[20px]  fill-[#7e1a00] max-h-[20px]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                <div class="cal">
                <h1 class=" font-bold text-[#7E1A00]" >{{$t('Email')}}</h1>
                <a href="mailto:info@4hgroup.com.eg" class="text-[#686868] text-[14px]">info@4hgroup.com.eg</a>
            </div>
            </div>
            <div class="flex  items-center gap-[25px] w-full">
                <svg aria-hidden="true" class="max-w-[20px]  fill-[#7e1a00] max-h-[20px]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                <div class="cal">
                <h1 class=" font-bold text-[#7E1A00]">{{$t('address')}}</h1>
                <a class="text-[#686868] text-[14px]" target="_blank" href="https://www.google.com/maps/dir//Road+after+Coca-Cola+Company,+Abou+El-Gheit,+El+Qanater+El+Khayreya,+Al-Qalyubia+Governorate+6402831/@30.1598406,31.1139874,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14586bb9dcdd74db:0x52d6a6fc9b269ac0!2m2!1d31.1963887!2d30.1598663?hl=en-eg&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">{{$t('location')}}</a>
            </div>
            </div>
        </div>
            </div>
        </div>
</div>
</div>
</template>
<script setup> 
import useAuthStore from '~/store/users/authStore.js';
import { ref } from 'vue';
const data=ref({});
const a=useAuthStore();
const submit = ()=>{
a.submitForm(data.value);
}
</script>