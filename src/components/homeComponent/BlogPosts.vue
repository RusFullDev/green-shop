<template>
    <div class="mb-[100px]">
    <div class="text-center pb-9">
<h2 class="text-[#3D3D3D] text-3xl leading-4 font-bold pb-4">Our Blog Posts</h2>
<p class="text-[#727272] font-normal text-base">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
</div>
<div class="grid grid-cols-4 gap-11">
<div v-for="item,index in posts" :key="index" >
<img :src="item.img" alt="" class="pb-2 w-full">
<div class="h-[167px] w-[268] bg-[#FBFBFB] px-2">
<p class="text-base text-[#46A358] font-medium pb-1">{{ item.date }}</p>
<h2 class="text-[#3D3D3D] font-bold text-xl pb-1">{{item.title}}</h2>
<p class="text-[#727272] font-normal text-base pb-2">{{ item.info }}</p>
<button class="text-[#3D3D3D] text-base font-medium hover:text-[#46A358]">Read More -></button>
</div>
</div>
</div>

    </div>
</template>

<script>


    export default {
        data(){
            return{
                posts:[
                    {
                img:'/img/flower22.png',
                date:'September 12  I Read in 6 minutes',
                title:'Cactus & Succulent Care Tips',
                info:'Cacti are succulents are easy care plants for any home or patio. '
                    },
                    {
                img:'/img/flower23.png',
                date:'September 13  I Read in 2 minutes',
                title:'Top 10 Succulents for Your Home',
                info:'Best in hanging baskets. Prefers medium to high light.'
                    },
                    {
                img:'/img/flower3.png',
                date:'September 15  I Read in 3 minutes',
                title:'Cacti & Succulent Care Tips',
                info:'Cacti and succulents thrive in containers and because most are..'
                    },
                    {
                img:'/img/flower4.png',
                date:'September 15  I Read in 2 minutes',
                title:'Best Houseplants Room by Room',
                info:'The benefits of houseplants are endless. In addition to..'
                    }

                ]
                


            }
        }
    }
</script>

<style lang="scss" scoped>

</style>