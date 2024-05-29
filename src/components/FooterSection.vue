<template>
    <div class="bg-[#FBFBFB]">
        <div class="flex justify-between place-items-center px-3 py-3">
        <div class="grid grid-cols-3  px-3 py-3 divide-x-2 gap-5">
            <div v-for="item,index in footerCard" :key="index" class=" px-5">
                    <img :src="item.img" alt="">
                <h2>{{ item.title }}</h2>
                <p>{{ item.info }}</p>
            </div>
            
        </div>
        <div class="w-[400px] flex flex-col gap-4">
                <h2>Would you like to join newsletters?</h2>
                <div class="flex ">
                    <input type="text" placeholder="enter your email address..." class=" outline-none px-5">
                    <button class="w-[85px] h-[40px] text-black rounded-md border-none bg-[#46A358] hover:text-white hover:bg-green-500">Join</button>
                </div>
                <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>
        </div>

        <div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                footerCard:[
                    {
                    img:'/public/icons/img1.svg',
                    title:'Garden Care',
                    info:'We are an online plant shop offering a wide range of cheap and trendy plants.'
                },
                {
                    img:'/public/icons/img2.svg',
                    title:'Plant Renovation',
                    info:'We are an online plant shop offering a wide range of cheap and trendy plants.'
                },
                {
                    img:'/public/icons/img3.svg',
                    title:'Watering Graden',
                    info:'We are an online plant shop offering a wide range of cheap and trendy plants.'
                },
                
            ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>