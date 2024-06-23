<template>
    <div class="py-8 bg-[#FBFBFB] px-5">
        <div class="grid grid-cols-4 gap-4">
            <div v-for="item,index in footerInfo" :key="index" >
                <div class="col-span-3">
    <h2 class="pb-2 text-[#3D3D3D] font-bold text-base">{{ item.title}}</h2>
    <div >
        <div v-for="i,ind in item.info" :key="ind" class="pb-2"><a href="#" class="text-[#3D3D3D] font-normal text-base">{{i}}</a></div>
    </div>

        </div>
        </div>
        <div>
            <div>
                <h2 class="pb-5 text-[#3D3D3D] font-bold text-base">Social Media</h2>
             
                <div class="flex gap-2 items-center pb-7">
                <div v-for="item,index in socialMedia" :key="index" >
                   <div class="border-2 px-2 py-2 rounded-md  hover:border-green-500"> <img :src="item" alt="social"></div> </div>
                </div>

            </div>
            <div>
                <h2 class="pb-3 text-[#3D3D3D] font-bold text-base">We accept</h2>
                <img src="/img/image 16.png" alt="">
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                footerInfo:[
                {
                    title:'My Account',
                    info:['My Account','Our stores','Contact us','Career','Specials'],
                
                },
                {
                    title:'Help & Guide',
                    info:['Help Center','How to Buy','Shipping & Delivery','Product Policy','How to Return'],
                   
                },
                {
                    title:'Categories',
                    info:['House Plants','Potter Plants','Seeds','Small Plants','Accessories'],
                  
                }
            ],
            socialMedia:['/icons/Facebook.svg','/icons/Instagram.svg','/icons/Twitter.svg',
                         '/icons/Linkedin.svg','/icons/Union.svg'],
            // socialMedia:[
            //     {
            //         social:'/icons/Facebook.svg'
            //     }, 
            //     {
            //         social:'/icons/Instagram.svg'
            //     },
            //     {
            //         social:'/icons/Twitter.svg'
            //     },
            //     {
            //         social:'/icons/Linkedin.svg'
            //     },
            //     {
            //         social:'/icons/Union.svg'
            //     }
            // ],
            payCardType:[
                {
                    cardName:'/img/image 16.png'
                }
            ]

            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>