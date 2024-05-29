<script>
import AuthModel from './components/AuthModel.vue';
import Carousel from './components/Carousel.vue';
import Category from './components/Category.vue';
import Header from './components/Header.vue';


import Picture from './components/Picture.vue';
import Product from './components/Product.vue';
import CardTrend from './components/CardTrend.vue';
import BlogPosts from './components/BlogPosts.vue';
import FooterSection from './components/FooterSection.vue';
export default{
  components:{Header,Picture,Category,Product,AuthModel,Carousel,CardTrend,BlogPosts,FooterSection},
  data(){
    return{
    }
  }
}
</script>

<template>

  <div class="container">
      <Header/>    
      <Carousel/>
    
  
    <div class="grid grid-cols-4 gap-12">
      <Category/>
        <Product class="col-span-3"/>
    </div>
<CardTrend/>
<BlogPosts/>
<FooterSection/>
  </div>



</template>







<style scoped>
</style>
