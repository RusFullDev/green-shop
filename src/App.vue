<script>
import Category from './components/Category.vue';
import Header from './components/Header.vue';
import MenuProduct from './components/MenuProduct.vue';
import Picture from './components/Picture.vue';
import Product from './components/Product.vue';
export default{
  components:{Header,Picture,Category,Product,MenuProduct},
  data(){
    return{
    }
  }
}
</script>

<template>

  <div class="container">
      <Header/>
    

    <div>
      <Picture/>
    </div>
    <div class="grid grid-cols-2">
      <Category/>
      <!-- <div>
        <MenuProduct/> -->
        <Product/>
      <!-- </div> -->
      
    </div>

  </div>



</template>







<style scoped>
</style>
