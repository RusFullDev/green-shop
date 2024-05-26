<template>
    <div class="flex justify-between gap-[50px] items-center border-b-2 h-[53px] py-8 px-16 shadow fixed top-0 left-0 w-full bg-white ">
   <img src="/public/img/logo.png" alt=""> 
    <div v-for="item,index in menu":key="index" class="flex gap-[50px] text-[#3D3D3D] text-base font-normal">
        <a href="#" class="hover:text-black hover:font-bold hover:border-b-4 hover:border-[#46A358]">{{item.name}}</a>
    </div>
    <div class="flex gap-[30px] items-center">
        <img src="/public/img/search.png" alt="search">
        <img src="/public/img/korzina.png" alt="korzina">
        <div class="flex">
            <div class="flex relative">
<img src="/public/img/Logout.png" alt="Logout" class="flex absolute pt-2 pl-2">
            <button class="h-[35px] w-[100px] border-none bg-slate-400 text-black hover:bg-[#46A358] hover:text-white rounded-md text-center">Login</button>
        </div>
        </div>
    </div>
    </div>
 
</template>

<script>
    export default {
      
        data(){
            return{
            menu:[
                {
                    name:'Home',
                },
                {
                    name:'Shop',
                },
                {
                    name:'Plant Care',
                },
                {
                    name:'Blogs',
                },
                
            ]
        }
        }
    }
    
</script>


