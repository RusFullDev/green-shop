<template>

<div>
    <div class="flex justify-between pb-7">
        <div class="flex gap-[37px]">
        <button class="hover:text-green-500">All Plants</button>
        <button class="hover:text-green-500">New Arrivals</button>
        <button class="hover:text-green-500">Sale</button>
    </div>
       <div class="relative flex gap-1">
        <h2>Short by:</h2>
        <div @click='isShowMenu = !isShowMenu' class="flex gap-1 ">
            <a href="#" class="hover:text-green-500">Default sorting</a>
            <img src="/public/img/Arrow - Down 2.png" alt="" :class="isShowMenu ?'rotate-180':'rotate-0'" class="duration-200">
            <Dropdown :class="isShowMenu ? 'opacity-100 visible':'opacity-0 invisible'"/>
        </div>
       </div>

    </div>
  <div class="grid grid-cols-3 gap-[33px]  items-center mb-[90px]" >

<div v-for="item,index in flowers" :key='index'  @mouseover="item.hover = true" @mouseleave="item.hover = false">
    <div>
    <div class="relative">
<img :src="item.img" alt="flowers"> 
<div class="flex justify-center gap-3 left-1/4 absolute"
                :class="{ hidden: !item.hover }">
    <button><img :src="item.card" alt=""></button>
    <button><img :src="item.like" alt=""></button>
    <button><img :src="item.search" alt=""></button>
</div> 
<div class="">
        <h3 class="text-[#3D3D3D] text-base leading-4 font-normal pt-5">{{ item.name }}</h3>
       <div class="flex gap-2">
        <p class="text-[#46A358] text-lg leading-4 font-bold">{{ item.price }}</p>
        <p class="text-[#A5A5A5] text-lg leading-4 font-normal line-through">{{ item.oldPrice }}</p>
    </div> 
</div>
</div>

</div>
</div>
    </div>
<PageNumber/>       
</div>
</template>

<script>
import PageNumber from './PageNumber.vue';

import Dropdown from './Dropdown.vue'


    export default {
        components:{PageNumber,Dropdown},
        data(){
            return{
                isShowMenu:false,
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
        },
        changeShow(){
    this.isShowMenu = !this.isShowMenu
}
    }
</script>

<style scoped>

</style>