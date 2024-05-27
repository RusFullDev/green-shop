<template>


  <div class="grid grid-cols-3 gap-[33px] col-start-3 items-center" >

<div v-for="item,index in flowers" :key='index'  @mouseover="item.hover = true" @mouseleave="item.hover = false">
    <div class="relative">
<img :src="item.img" alt="flowers" class="">
<div class="flex justify-center gap-3 mb-4 -bottom-1 left-[30%] absolute"
                :class="{ hidden: !item.hover }">
    <button><img :src="item.card" alt=""></button>
    <button><img :src="item.like" alt=""></button>
    <button><img :src="item.search" alt=""></button>
</div> 
</div>
        <h3 class="text-[#3D3D3D] text-base leading-4 font-normal">{{ item.name }}</h3>
       <div class="flex gap-2">
        <p class="text-[#46A358] text-lg leading-4 font-bold">{{ item.price }}</p>
        <p class="text-[#A5A5A5] text-lg leading-4 font-normal line-through">{{ item.oldPrice }}</p>
    </div> 

    
</div>
    </div>
</template>

<script>
import MenuProduct from './MenuProduct.vue';

    export default {
        data(){
            return{
                flowers:[
                    {
                        img:'/img/image 1.png',
                        name:'Barberton Daisy',
                        price:'$119.00',
                        oldPrice:'',
                        like:'/img/heart 1.png',
                        card:'/img/shopping 1.png',
                        search:'/img/search.png',


                    },
                    {
                        img:'/img/product-21-320x320 1.png',
                        name:'Angel Wing Begonia',
                        price:'$169.00',
                        oldPrice:'',
                        like:'/img/heart 1.png',
                        card:'/img/shopping 1.png',
                        search:'/img/search.png',

                    },
                    {
                        img:'/img/image 2.png',
                        name:'African Violet',
                        price:'$199.00',
                        oldPrice:'$229.00',
                        like:'/img/heart 1.png',
                        card:'/img/shopping 1.png',
                        search:'/img/search.png',

                    },
                    {
                        img:'/img/01 3.png',
                        name:'Beach Spider Lily',
                        price:'$129.00',
                        oldPrice:'',
                        like:'/img/heart 1.png',
                        card:'/img/shopping 1.png',
                        search:'/img/search.png',

                    },
                    {
                        img:'/img/image 7.png',
                        name:'Blushing Bromeliad',
                        price:'$139.00',
                        oldPrice:'',
                        like:'/img/heart 1.png',
                        card:'/img/shopping 1.png',
                        search:'/img/search.png',

                    },
                    {
                        img:'/img/image 8.png',
                        name:'Aluminum Plant',
                        price:'$179.00',
                        oldPrice:'',
                        like:'/img/heart 1.png',
                        card:'/img/shopping 1.png',
                        search:'/img/search.png',

                    },
                    {
                        img:'/img/image 8.png',
                        name:'Bird\'s Nest Fern',
                        price:'$99.00',
                        oldPrice:'',
                        like:'/img/heart 1.png',
                        card:'/img/shopping 1.png',
                        search:'/img/search.png',

                    },
                    {
                        img:'/img/product-20-320x320 1.png',
                        name:'Broadleaf Lady Palm',
                        price:'$59.00',
                        oldPrice:'',
                        like:'/img/heart 1.png',
                        card:'/img/shopping 1.png',
                        search:'/img/search.png',

                    },
                    {
                        img:'/img/image 10.png',
                        name:'Chinese Evergreen',
                        price:'$39.00',
                        oldPrice:'',
                        like:'/img/heart 1.png',
                        card:'/img/shopping 1.png',
                        search:'/img/search.png',

                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>