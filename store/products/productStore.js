import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

const useProductsStore = defineStore('productStore', () => {
  const product = ref([]);
  const error = ref(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      product.value = response.data.products;
    } catch (err) {
      error.value = err.message;
    }
  };
  
  return {
    product,
    error,
    fetchProducts,
  };
});

export default useProductsStore;
