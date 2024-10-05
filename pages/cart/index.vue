<template>
    <div class="containerPage"> 
        <div v-if="Cstor.item.length===0" class="w-full flex items-center justify-center flex-col shadow-md ">
            <h1 class="  text-[24px] font-bold w-[50%] text-center">No items</h1>
            <nuxt-link to="/prodaucts" class="!bg-[#7e1a00] text-white w-[300px] p-[5px] rounded-md font-bold text-center ">Back To Store</nuxt-link>
        </div>
        <div v-else-if="step===1" class="flex flex-col md:flex-row">
            <div class="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-lg">
                <table class="w-full text-left" >
                    <thead>
                        <tr>
                            <th class="pb-4">Product</th>
                            <th class="pb-4">Price</th>
                            <th class="pb-4">Quantity</th>
                            <th class="pb-4">Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Product 1 -->
                        <tr class="border-b" v-for="product in Cstor.item">
                            <td class="py-4 flex items-center">
                                <img class="w-16 h-16 object-cover mr-4" :src="product.thumbnail" alt="Product">
                                <div>
                                    <p>{{product.title}}</p>
                                    <span class="text-gray-500 text-sm">{{product.category}}</span>
                                </div>
                            </td>
                            <td class="py-4">${{product.price}}</td>
                            <td class="py-4">
                                <div class="flex items-center space-x-2">
                                    <button class="bg-gray-300 px-2 rounded" @click="product.quantati-=1">-</button>
                                    <input type="text" :value=product.quantati class="w-12 text-center border rounded-md">
                                    <button class="bg-gray-300 px-2 rounded" @click="product.quantati+=1" >+</button>
                                </div>
                            </td>
                            <td class="py-4">${{(product.quantati * product.price).toFixed(2)}}</td>
                            <td class="py-4 text-right">
                                <button class="text-[#7e1a00] bg-gray-300 opacity-4  rounded-[50%] w-[25px] font-bold" @click="Cstor.removeItems(product)">&times;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            <!-- Order Summary -->
            <div class="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg ml-0 md:ml-6 mt-6 md:mt-0">
                <h2 class="text-lg font-bold mb-6">Order Summary</h2>
                <div class="flex justify-between mb-4">
                    <span> Subtotal</span>
                    <span>${{Cstor.subtotal.toFixed(2)}}</span>
                </div>
                <div class="flex justify-between mb-4">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div class="mb-6">
                    <a href="#"  class="text-[#7e1a00] text-sm">Add coupon code</a>
                </div>
                <div class="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${{Cstor.subtotal.toFixed(2)}}</span>
                </div>
               <button @click="step=2" class="bg-[#7e1a00] text-white w-full mt-6 py-2 rounded-lg">Checkout</button>
            </div>
            
        </div>
        <!-- Address Form -->
        <form v-else-if="step===2" class="mt-6 space-y-4 max-w-[500px] m-auto shadow-md rounded-[10px] p-[5px]" @click="showform" >
            <div>
                <label for="country" class="block text-gray-600 mb-2">البلد</label>
                <select id="country" class="w-full border border-gray-300 rounded-md p-2">
                    <option>Egypt</option>
                    <!-- Add more options if needed -->
                </select>
            </div>

            <div>
                <label for="city" class="block text-gray-600 mb-2">city</label>
                <select id="city" class="w-full border border-gray-300 rounded-md p-2">
                    <option v-for="city in gover">{{city.name}}</option>
                    <!-- Add more options if needed -->
                </select>
            </div>

            <div>
                <label for="city" class="block text-gray-600 mb-2">City</label>
                <input type="text" id="city" class="w-full border border-gray-300 rounded-md p-2" placeholder="City">
            </div>

            <div>
                <label for="zip" class="block text-gray-600 mb-2">PostalCode</label>
                <input type="text" id="zip" class="w-full border border-gray-300 rounded-md p-2" placeholder="ZIP">
            </div>

            <!-- Update Button -->
            <div class="mt-6 flex justify-between text-lg font-bold max-w-[250px] m-auto ">
                <span>Total</span>
                <span>${{Cstor.subtotal.toFixed(2)}}</span>
            </div>
        <div class="flex w-full justify-center items-center">
     <!-- Proceed to Checkout Button -->
           <button @click="step=1" class="bg-[#7e1a00] text-white text-[10px]  mt-6 py-3 rounded-lg">back to cart</button>
            <button class="bg-[#7e1a00] text-white  mt-6 p-3 rounded-md w-[250px]  mx-auto ">Proceed to Checkout</button>
            </div>
        </form>
    </div>
                

</template>
<script setup>
const gover=[{
    id:'1',
    name:'Cairo',
},
 {
    id:'2',
    name:'Alexandria',
},
 {
    id:'3',
    name:'Giza',
},
 {
    id:'4',
    name:'Asyut',
},
 {
    id:'5',
    name:'Shubra El-Kheima',
},
{
    id:'6',
    name:'Matruh',
},

];
const step = ref(1);
const Cstor = useCardStore();
import { data } from 'autoprefixer';
import useCardStore from '~/store/cardStore';


</script>