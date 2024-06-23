<script >
import axios from 'axios';
import ProductCard from '../ProductCard.vue';
export default{
    data(){
        return{
            products:[]
        }
    },
   
    created(){
this.fechProduct()
    },
computed:{
    count(){
return this.$store.state.count
    }
},
components:{ProductCard},
methods:{
    increment(){
        // this.$store.commit("INCREMENT")

        this.$store.dispatch("increment") // actions orqali
    },
    fechProduct(){
axios.get('https://dummyjson.com/products')
.then(res=>{
    this.products=res.data.products
})
.catch(err=>console.log('err',err))
    }
}

}

</script>

<template>
    <div class="container my-[100px]">
<h1 class="text-center font-bold text-5xl mb-12">Vuex</h1>

<!-- {{ count }}
{{ $store.getters.doubleCount }}
<button @click="increment" class="px-7 py-2 bg-green-500 border-none text-white rounded-md">Increment</button> -->

<div class="grid grid-cols-4 gap-5">
    <ProductCard v-for="product in products" :key="product.id" :product="product"/>
</div>





    </div>
</template>



<style lang="scss" scoped>

</style>