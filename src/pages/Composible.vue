<script setup>
import { useCounter } from "../components/composible/useCounter";
import { useProducts } from "../components/composible/useProducts";

import { useIntersectionObserve } from "../components/composible/intersectionObserve";

const{isIntersecting} = useIntersectionObserve()

const { increment, decrement, count,double } = useCounter();


const{products,loading,error,fechProducts}= useProducts()
fechProducts()

</script>





<template>
  <div class="py-[200px]">
    <div class="flex gap-2 place-items-center">
      <h1 class="bg-red-400">{{ count }}</h1>
      <h2 class="bg-yellow-400">{{ double }}</h2>
      <button @click="increment" class="rounded-2 bg-gray-300 px-5 py-3">increment</button>
      <button @click="decrement" class="rounded-2 bg-gray-300 px-5 py-3">decrement</button>
    </div>
<div>
  <!-- <h2>Products</h2>
  <div v-for="(item, index) in products" :key="index">
  <img :src="item.thumbnail" alt="">
  <p>{{ item.title }}</p>
  <p>{{ item.description }}</p>
  <p>{{item.price}}</p> -->


  <!-- </div> -->
</div>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<style scoped></style>
