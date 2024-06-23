<template>
    <div class="grid grid-cols-2 bg-[#FBFBFB] mb-[138px]">
<div v-for="item,index in trend" :key="index" class="flex items-center text-right">
  <img :src="item.img" alt="trendFlowers">
  <div>
    <div class="pb-6">
    <h2 class="text-2xl font-bold uppercase">{{item.title}}</h2>
    <p class="text-[#727272] text-lg leadin-[24px]">{{ item.info }}</p>
  </div>
    <button class="hover:bg-[#46A358] text-white rounded-md h-[40px] w-[140px] bg-green-500">Find More -></button>
  </div>
</div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                trend: [
        {
          img: "/img/cactuz.png",
          title: "Summer cactus & succulents",
          info: "We are an online plant shop offering a wide range of cheap and trendy plants",
        },
        {
          img: "/img/cactuz2.png",
          title: "Styling Trends & much more",
          info: "We are an online plant shop offering a wide range of cheap and trendy plants",
        },
      ],
            }
        }
        
    }
</script>

<style scoped>

</style>