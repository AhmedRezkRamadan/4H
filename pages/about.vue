<template>
    <div class="containerPage">
    <div class="flex items-center justify-center gap-10 ">
        <div >
            <img class="w-[250px] h-[250px]" src="/icons/cropped-Document-20.png">
        </div>
        <div class="felx flex-col items-center justify-center]">
            <div>
            <h1 class="text-[45px] font-bold text-[#7E1A00] mb-[20px]">About Us</h1>
            <div class="h-[3px] w-[100px] bg-[#7E1A00] mb-[20px]"></div>
            <p class="text-[#777777] text-[14px] text-left mb-[20px] max-w-[700px]"> <span class=" text-[#7E1A00] font-bold " >4H Group</span> is a company specializing in the manufacture of school and office furniture. It was established in 2010 AD. The company relies on implementing an integrated system that achieves the requirements of standard specifications for quality, continuing its development, and improving the work environment. In order to implement the company’s future vision, which aims as a whole to achieve different growth rates, which is directly in the interest of our customers and employees. The company also has great contracting capabilities with an integrated work team. The company also works in all governorates of the Arab Republic of Egypt and also exports abroad The company’s pledge to provide the best A level of services, technical support and after-sales services through the team’s distinguished work and achieving the greatest possible benefit for our customers and our community.</p>
        </div>
            <div class="w-[736px] h-[153px]  shadow-md   flex items-center justify-center gap-[30px] rounded-[20px] mb-[15px]   ">
                <svg class="!w-[125px] !h-[35px] ml-[20px] !fill-[#7e1a00] " aria-hidden="true"  viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>
                <div class="felx flex-col justify-center items-center">
                <h1 class="text-[18px] font-bold ">Our Mission</h1>
                <p class="text-[14px] text-[#777777] ">With our partners, we create an environment of accuracy and trust in accordance with our values and ethics. With our customers, we create a culture of trust and safety in our recommendations to others. With the community, establishing our brand in the minds of the public and contributing to the growth of our communities.</p>
            </div>
            </div>
            <div class="w-[736px] h-[153px]  shadow-md   flex items-center justify-center gap-[30px] rounded-[20px] ml-[40px] ">
                <svg aria-hidden="true" class="!w-[125px] !h-[35px] ml-[20px] !fill-[#7e1a00] " viewBox="0 0 544 512" xmlns="http://www.w3.org/2000/svg"><path d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>
                <div class="felx flex-col justify-center items-center">
                <h1 class="text-[18px] font-bold ">Our Values</h1>
                <p class="text-[14px] text-[#777777] ">4H GROUP SCHOOL is to provide products to equip schools and nurseries with the highest efficiency, high quality and a high level of safety, and to achieve customer confidence and build a brand that achieves our goals in a comprehensive manner inside and outside our country.</p>
                </div>
             </div>
            </div>
            
        </div>
        <SwapierSection2></SwapierSection2>
        <div class=" flex items-center justify-center gap-[70px] mt-[15px] h-[100px]  !shadow-lg w-auto ">
        <div v-for="item in info">
            <div>
                <h1 class="w-full text-center text-[35px] font-extrabold">{{item.number}}</h1>
                <p class="text-[#7e1a00] font-bold ">{{item.titel}}</p>
            </div>
        </div>
    </div>
    </div>

</template>
<script setup>
import SwapierSection from '~/components/swapierSection.vue';
const info = [{
    titel:'Company Members',
    number:'26,000',
},
{
    titel:'Projects Success',
    number:'100%',
},
{
    titel:'Recognition',
    number:'2,900',
},
{
    titel:'Professional Team',
    number:'120+',
},
]
 

</script>