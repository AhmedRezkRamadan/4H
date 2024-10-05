<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img class="w-full" :src="product.thumbnail" alt="Product image">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ product.title }}</div>
        <p class="text-gray-700 text-base">{{ product.category }}</p>
        <div class="text-xl font-semibold">{{ product.price }} EGP</div>
        <button @click="Cstor.addToCart(product)" class="bg-[#7e1a00] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import useCardStore from "../store/cardStore"
  const Cstor=useCardStore();
    const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
  </script>
  