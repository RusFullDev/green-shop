<template>
  <!-- <div>
    <div class="flex justify-between ">
        <div class="flex gap-[37px]">
        <a href="#">All Plants</a>
        <a href="#">New Arrivals</a>
        <a href="#">Sale</a>
    </div>
       <div class="flex gap-1">
        <h2>Short by:</h2>
        <div class="flex gap-1">
            <a href="#">Default sorting</a>
            <img src="/public/img/Arrow - Down 2.png" alt="">
        </div>
       </div>

    </div> -->
     <div class="grid grid-cols-3 gap-[33px] col-start-3 items-center" >
<div v-for="item,index in flowers" :key='index'>
    <div class="w-[258px] h-[300px]">
<img :src="item.img" alt="flowers">
</div> 
        <h3 class="text-[#3D3D3D] text-base leading-4 font-normal">{{ item.name }}</h3>
       <div class="flex gap-2">
        <p class="text-[#46A358] text-lg leading-4 font-bold">{{ item.price }}</p>
        <p class="text-[#A5A5A5] text-lg leading-4 font-normal line-through">{{ item.oldPrice }}</p>
    </div> 

    
</div>
    </div>
    <!-- </div> -->
</template>

<script>
    export default {
        data(){
            return{
                flowers:[
                    {
                        img:'/public/img/image 1.png',
                        name:'Barberton Daisy',
                        price:'$119.00',
                        oldPrice:''

                    },
                    {
                        img:'/public/img/product-21-320x320 1.png',
                        name:'Angel Wing Begonia',
                        price:'$169.00',
                        oldPrice:''

                    },
                    {
                        img:'/public/img/image 2.png',
                        name:'African Violet',
                        price:'$199.00',
                        oldPrice:'$229.00'

                    },
                    {
                        img:'/public/img/01 3.png',
                        name:'Beach Spider Lily',
                        price:'$129.00',
                        oldPrice:''

                    },
                    {
                        img:'/public/img/image 7.png',
                        name:'Blushing Bromeliad',
                        price:'$139.00',
                        oldPrice:''

                    },
                    {
                        img:'/public/img/image 8.png',
                        name:'Aluminum Plant',
                        price:'$179.00',
                        oldPrice:''

                    },
                    {
                        img:'/public/img/image 8.png',
                        name:'Bird\'s Nest Fern',
                        price:'$99.00',
                        oldPrice:''

                    },
                    {
                        img:'/public/img/product-20-320x320 1.png',
                        name:'Broadleaf Lady Palm',
                        price:'$59.00',
                        oldPrice:''

                    },
                    {
                        img:'/public/img/image 10.png',
                        name:'Chinese Evergreen',
                        price:'$39.00',
                        oldPrice:''

                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>