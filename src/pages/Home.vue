
<script setup>
import Carousel from '../components/homeComponent/Carousel.vue'
import Category from '../components/homeComponent/Category.vue'
import Product from '../components/homeComponent/Product.vue'
import CardTrend from '../components/homeComponent/CardTrend.vue'
import BlogPosts from '../components/homeComponent/BlogPosts.vue'
</script>


<template>
    <div>
        <Carousel/>
    <div class="grid grid-cols-4 gap-12">
      <Category/>
        <Product class="col-span-3"/>
    </div>
<CardTrend/>
<BlogPosts/>
    </div>
</template>

<style scoped>

</style>