<template>
    <div class="containerPage">
        <div class="">
            <div class="w-full text-center mb-[50px] z-[5] relative ">
                <h1 class="text-[#7E1A00] text-[45px] font-bold">Features</h1>
                <p class="text-[#777777] "> <span class="text-[#800000] font-bold"> 4H Group </span> is where craftsmanship meets innovation to create exceptional furniture solutions tailored to your needs.</p>
            </div>
            <div
            class="flex items-center justify-center gap-11  ">
            <img src="../public/images/beforimage.jpg" class="absolute object-cover w-full opacity-20"> 
                <div class="bg-[#e5e7eb]  rounded-[20px] p-[30px] group hover:bg-[#800000]  z-20 "
                :class="item.classcus" 
                 v-for="item in carddata">
                    <section class="w-[45px] h-[5px] bg-[#313131] rounded-[5px] mb-[30px] group-hover:bg-white "></section>
                    <h1 class="text-[24px] font-bold mb-[40px] group-hover:text-white ">{{item.title}}</h1>
                    <p class="group-hover:text-white  text-[#777777] text-[15px] max-w-[300px] mb-[25px]">{{item.description}}</p>
                    <a href="/" class="group-hover:text-white">
                        <div
                         class="border-[1px] border-solid w-[35px] h-[35px] flex items-center justify-center border-black rounded-[10px]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>  
                        </div>
                        </a>
                
                </div>
                </div>
            </div>
        </div>
</template>
<script setup>
const carddata=[
    {
        title:'Customer Service',
        description:'A customer support team communicates with all customers to measure their satisfaction with our products and services, and also responds immediately to customer complaints and suggestions, in order to provide a unique purchasing experience.',
        classcus:'class1',
    },
{
        title:'Interactive Experience',
        description:'An integrated work team at the highest level to carry out installation and maintenance work with the highest level of quality and professionalism',
        classcus:'class2',

    },
{
        title:'Outstanding work team',
        description:'In educational life, we respond flexibly to rapidly changing circumstances.By creating highly engaging and stimulating learning areas, we contribute to the quality of education for students.',
        classcus:'class3',

    },


]
</script>
<style >
.class2{
background-color: #800000 ;
color: white;
max-width: 308px;
}
.class2 section{
    background-color: white;
}
.class2 p{
    color: white
}
.class2 div{ 
    border: 1px solid white;
}

.class2:hover{
background-color: rgb(61, 4, 4);
color: white
}
</style>