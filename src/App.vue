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
import FooterSection2 from './components/FooterSection2.vue';
import FooterSection3 from './components/FooterSection3.vue';
export default{
  components:{Header,Picture,Category,Product,AuthModel,Carousel,CardTrend,BlogPosts,FooterSection,FooterSection2,FooterSection3},
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
<FooterSection2/>
<FooterSection3/>

<h3 class="text-center text-[#727272] font-normal text-base">© 2021 GreenShop. All Rights Reserved.</h3>
  </div>



</template>







<style scoped>
</style>
