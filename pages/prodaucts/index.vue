<template>
  <div class="containerPage">
    <img src="/images/02666-scaled.jpg" class="h-[400px] w-full" >
    <!-- Dropdown for Category Selection -->
    <div class="mb-4 flex justify-center">
      <select v-model="selectedCategory" class="border border-gray-300 rounded-lg py-2 px-4 text-[#7e1a00] text-center font-bold mt-[5px]">
        <option value="all">All Categories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    
    <div class="container mx-auto py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProductCard  v-for="(product, index) in filteredProducts" :key="index" :product="product" />
      </div>
      <div class="flex justify-center mt-8">
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import ProductCard from '~/components/ProductCard.vue';
import useProductsStore from '~/store/products/productStore';

const products = useProductsStore();

// Fetch products when component is mounted
onMounted(async () => {
  await products.fetchProducts();
});

// Categories for filtering
const categories = ['beauty', 'fragrances', 'furniture', 'groceries'];

// Reactive selected category
const selectedCategory = ref('all');

// Computed property to filter products by category
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products.product; // Assuming products.product holds the actual product list
  }
  return products.product.filter(product => product.category === selectedCategory.value);
});
</script>
