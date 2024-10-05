<template>
    <div class="layout">
      <mainheader />
      <slot></slot>
      <mainfooter/>
    </div>
  </template>
  
  <script setup>
  // تأكد من استيراد MainHeader و MainFooter إذا كنت تستخدمها
  import mainheader from '@/components/mainheader.vue'
  import mainfooter from '@/components/mainfooter.vue'
  </script>
  
  <style scoped>
  
  </style>
  