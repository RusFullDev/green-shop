<script>
import ProductCard from './ProductCard.vue';

    export default {
        components:{ProductCard },

        computed:{
            products(){
                return this.$store.state.likeProducts
            }
        }
        
    }
</script>



<template>
     <div class="container my-[100px]">
<h1 class="text-center font-bold text-5xl mb-12">Favorites</h1>
<div class="grid grid-cols-4 gap-5">
    <ProductCard v-for="product in products" :key="product.id" :product="product"/>
</div>



    </div>
</template>



<style lang="scss" scoped>

</style>