<template>
  <div class="con">
    <v-card v-if="data" class="bolg-details" >
      <img :src="data.thumbnail" alt="Product Image">
      <v-card-text class="!text-[30px]">{{ data.category }}</v-card-text>
      <h1>{{data.title}}</h1>
      <div>{{data.rating}} </div>
      <p>{{data.price}} USD</p>
      <v-btn>add to car</v-btn>
    </v-card>
    <!-- عرض رسالة الخطأ إن وجدت -->
    <div v-if="error">
      
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';

// الحصول على معرف المنتج من المسار
const route = useRoute();
const productId = route.params.id;

// جلب البيانات باستخدام معرف المنتج
const { data, error } = await axios.get(`https://dummyjson.com/products/${productId}`);
</script>

<style scoped>
.bolg-details {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
}
.con{
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;

}
</style>
