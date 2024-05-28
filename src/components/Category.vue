<template>
    <div>
    <div class="w-[310px] h-[750px] bg-[#FBFBFB] ">

    <div class="w-[268px] h-[383px] pt-[14px] pb-[36px] pl-[18px] pr-[24px] ">
    <h3 class="text:[#3D3D3D] text-lg leading-4 font-bold py-3">Categories</h3>
    <div v-for="item,index in category":key='index' class="flex justify-between hover:text-[#46A358]">
    <h4 class="text-[#3D3D3D] text-[15px] leading-[40px] font-normal  hover:text-[#46A358]">{{item.name}}</h4>
    <p class="text-[#3D3D3D] text-[15px] leading-[40px] font-normal  hover:text-[#46A358]">{{item.number}}</p>
</div>  
</div>


<div class="w-[226px] h-[133px] pb-[46px] pl-[18px] pr-[66px] mt-12">
    <h3 class="text:[#3D3D3D] text-lg leading-4 font-bold">Price Range.</h3>
    <input type="range">
    <div class="flex gap-1"><h4 class="text-[#3D3D3D] text-[15px] leading-[40px] font-normal ">Price:</h4><p class="text-[#3D3D3D] text-[15px] leading-[40px] font-normal  hover:text-[#46A358]">$39 - $1230</p></div>
    <button class="hover:bg-[#46A358] hover:text-white text-[#3D3D3D] text-base leading-5 font-bold w-[90px] h-[35px] rounded-md bg-green-500" >Filter</button>
</div>

<div class="w-[268px] h-[143px] pb-[19px] pl-[18px] pr-[24px] py-6">
    <h3 class="text:[#3D3D3D] text-lg leading-4 font-bold">Size</h3>
    <div v-for="item,index in size":key='index' class="flex justify-between hover:text-[#46A358]">
    <h4 class="text-[#3D3D3D] text-[15px] leading-[40px] font-normal  hover:text-[#46A358]">{{item.name}}</h4>
    <p class="text-[#3D3D3D] text-[15px] leading-[40px] font-normal  hover:text-[#46A358]">{{item.number}}</p>
</div>  

</div>
</div>

<div class="w-[310px] h-[470px] items-center">
    <img src="/public/img/Super Sale.png" alt="" class="pb-[13px] px-[22px] ">
  <h2 class="text-[#3D3D3D] text-[23px] leading-4 pb-[13px] font-bold px-[42px]">UP TO 75% OFF</h2>
    <img src="/public/img/image 12.png" alt="" >
</div>


</div>
</template>

<script>
    export default {
      
        data(){
            return{
            category:[
                {
                    name:'House Plants',
                    number:'(33)'
                },
                {
                    name:'Potter Plants',
                    number:'(12)'
                },
                {
                    name:'Seeds',
                    number:'(65)'
                },
                {
                    name:'Small Plants',
                    number:'(39)'
                },
                {
                    name:'Big Plants',
                    number:'(23)'
                },
                {
                    name:'Succulents',
                    number:'(17)'
                },
                {
                    name:'Trerrariums',
                    number:'(19)'
                },
                {
                    name:'Gardening',
                    number:'(13)'
                }
                ,
                {
                    name:'Accessories',
                    number:'(18)'
                }
            ],
            size:[
                {
                    name:"Small",
                    number:'(119)'
                },
                {
                    name:"Medium",
                    number:'(86)'
                },
                {
                    name:"Large",
                    number:'(78)'
                }
            ]
        }
        }
    }
    
</script>

<style  scoped>

</style>