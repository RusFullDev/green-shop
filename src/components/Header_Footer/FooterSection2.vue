<template>
    <div>
        <div class="flex  gap-[87px] bg-slate-200 py-6 pl-7 ">
          <img src="/icons/greenShopLogo.svg" alt="Green shop logo" class="">
          <div v-for="item,index in footerContact" :key="index">
<div class="flex gap-2 ">
    <div class="flex items-center"> <img :src="item.img" alt="img"></div>
    <p class="w-[200px] h-11 flex place-items-center text-[#727272] font-normal text-base">{{ item.info }}</p>
</div>

        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                footerContact:[
            {
                    img:'/icons/Location.svg',
                    info:'70 West Buckingham Ave.Farmingdale, NY 11735'
                },
                {
                    img:'/icons/Message.svg',
                    info:'contact@greenshop.com'
                },
                {
                    img:'/icons/Calling.svg',
                    info:'+88 01911 717 490'
                },
            ],
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>