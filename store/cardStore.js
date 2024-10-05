import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useCardStore = defineStore('cardStore', () => {
    const item = ref([]);

    // حساب المجموع الكلي
    const totalPrice = computed(() => {
        return item.value.reduce((sum, item) => sum + (item.price * item.quantati), 0);
    });

    // إضافة المنتج إلى العربة أو زيادة الكمية إذا كان المنتج موجودًا بالفعل
    const addToCart = (product) => {
        const existingProduct = item.value.find((p) => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantati += 1; // زيادة الكمية إذا كان المنتج موجودًا
        } else {
            item.value = [...item.value, { ...product, quantati: 1 }]; // إضافة المنتج إذا لم يكن موجودًا
        }
    };
    const subtotal = computed(() => {
        return item.value.reduce((sum, product) => sum + product.price * product.quantati, 0);
    });
    const removeItems = computed(() =>{
        return (product) => {
            item.value = item.value.filter((p) => p.id!== product.id);
        
}});
    

    return {
        item,
        totalPrice,
        addToCart,
        subtotal,
        removeItems,
    };
});

export default useCardStore;
