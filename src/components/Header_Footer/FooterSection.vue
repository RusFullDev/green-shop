<template>
    <div class="bg-[#FBFBFB]">
        <div class="flex  px-2 py-6 pb-8">
        <div class="grid grid-cols-3  px-3 py-3 divide-x-2 gap-5">
            <div v-for="item,index in footerCard" :key="index" class=" px-5">
                    <img :src="item.img" alt="">
                <h2 class="text-[#3D3D3D] font-bold text-base">{{ item.title }}</h2>
                <p class="text-[#727272] font-normal text-base">{{ item.info }}</p>
            </div>
            
        </div>
        <div class="w-[400px] flex flex-col gap-4">
                <h2 class="text-[#3D3D3D] font-bold text-base">Would you like to join newsletters?</h2>
                <div class="flex ">
                    <input type="text" placeholder="enter your email address..." class=" outline-none px-5">
                    <button class="w-[85px] h-[40px] rounded-md border-none bg-[#46A358] text-white hover:bg-green-500">Join</button>
                </div>
                <p class="text-[#727272] font-normal text-base">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>
        </div>

      
    
    </div>
 
</template>

<script>
    export default {
        data(){
            return{
                footerCard:[
                    {
                    img:'/icons/img1.svg',
                    title:'Garden Care',
                    info:'We are an online plant shop offering a wide range of cheap and trendy plants.'
                },
                {
                    img:'/icons/img2.svg',
                    title:'Plant Renovation',
                    info:'We are an online plant shop offering a wide range of cheap and trendy plants.'
                },
                {
                    img:'/icons/img3.svg',
                    title:'Watering Graden',
                    info:'We are an online plant shop offering a wide range of cheap and trendy plants.'
                },
                
            ],
            
            

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>