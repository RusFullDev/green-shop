<template>
    <div>

<div @click="closeModal" class="fixed bg-black/60 left-0 top-0 w-full h-screen z-[40]"></div>
<div class="fixed md:w-[500px] bg-white z-[50] left-1/2 top-1/2 rounded p-7 -translate-x-1/2 -translate-y-1/2">

    <div class="flex justify-end">
        <button @click="closeModal">x</button>
    </div>
    <div class="flex divide-x-4 justify-center">
        <button @click="content='login'" class="py-1 px-5" 
        :class="content=='login'?'text-[#46A358]':''">Login</button>

        <button @click="content='register'" class="py-1 px-5" 
        :class="content=='register'?'text-[#46A358]':''">Register</button>
    </div>

    <div v-if="content == 'login'">
        <div class=" mt-5 mb-5 text-center">
    <p class="text-sm font-normal text-[#3D3D3D] pb-[14px] text-center">Enter your username and password to login.</p>
    <input type="text" placeholder="almamun_uxui@outlook.com" class="w-[300px] h-[40px]  border-2 rounded-[5px] border-[#EAEAEA] text-start px-4 ">
    <div class="mt-5 mb-[14px] relative">
        <input type="password" placeholder="**************" class="w-[300px] h-[40px] border-2 rounded-[5px] border-[#EAEAEA] text-start px-4 cursor-pointer">
        <button><img src="/img/Hide.png" alt="Hide" class="absolute z-10 right-[80px] top-1/4"></button>
    </div>
   <div class=" pb-[27px]"><a href="#" class="hover:text-[#46A358] text-[#3D3D3D] text-xs leading-4 font-normal">Forgot Password?</a> </div>
    <button class="w-[300px] h-[40px] border-1 rounded-[5px] text-[#3D3D3D] bg-slate-500 hover:bg-[#46A358]
     hover:text-white font-bold text-base duration-100 cursor-pointer ">Login</button>
     <div class="flex justify-center gap-3 items-center text-center pt-[45px] pb-7">
        <img src="/img/Line 7.png" alt="">
        <p class="text-sm font-normal text-[#3D3D3D] ">Or login with</p>
        <img src="/img/Line 7.png" alt="">
    </div>

 <div class="flex justify-center items-center pb-4 relative"> 
<img src="/public/img/google 1.png" alt="google" class="absolute z-10 left-[135px]">
<button class="text-[#727272] font-medium text-sm w-[300px] h-[40px] border-2 border-[#EAEAEA] rounded-[5px]  hover:text-[#46A358]">Login with Google</button>
</div >

<div class="flex justify-center items-center relative">
<img src="/public/img/fecbook.png" alt="" class="absolute z-10 left-[135px]">
<button class="text-[#727272] font-medium text-sm w-[300px] h-[40px] border-2 border-[#EAEAEA] rounded-[5px] hover:text-[#46A358]">Login with Facebook</button>
    </div>
</div>


</div>

    <div v-if="content == 'register'">
        <div class=" mt-5 mb-5 text-center">
    <p class="text-sm font-normal text-[#3D3D3D] pb-[14px] text-center">Enter your email and password to register.</p>
    <input type="text" placeholder="Username" class="w-[300px] h-[40px]  border-2 rounded-[5px] border-[#EAEAEA] text-start px-4 mb-4 ">
    <input type="text" placeholder="Enter your email address" class="w-[300px] h-[40px]  border-2 rounded-[5px] border-[#EAEAEA] text-start px-4 ">
    <div class="mt-5 mb-[14px] relative">
        <input type="password" placeholder="Password" class="w-[300px] h-[40px] border-2 rounded-[5px] border-[#EAEAEA] text-start px-4 cursor-pointer">
        <button><img src="/img/Hide.png" alt="Hide" class="absolute z-10 right-[80px] top-1/4"></button>
    </div>
    <input type="text" placeholder="Confirm Password" class="w-[300px] h-[40px]  border-2 rounded-[5px] border-[#EAEAEA] text-start px-4 mb-[41px]">

    <button class="w-[300px] h-[40px] border-1 rounded-[5px] text-[#3D3D3D] bg-slate-500 hover:bg-[#46A358]
     hover:text-white font-bold text-base  duration-100 cursor-pointer ">Register</button>
     <div class="flex justify-center gap-3 items-center text-center pt-[45px] pb-7">
        <img src="/img/Line 7.png" alt="">
        <p class="text-sm font-normal text-[#3D3D3D] ">Or login with</p>
        <img src="/img/Line 7.png" alt="">
    </div>

 <div class="flex justify-center items-center pb-4 relative"> 
<img src="/public/img/google 1.png" alt="google" class="absolute z-10 left-[135px]">
<button class="text-[#727272] font-medium text-sm w-[300px] h-[40px] border-2 border-[#EAEAEA] rounded-[5px]  hover:text-[#46A358]">Login with Google</button>
</div >

<div class="flex justify-center items-center relative">
<img src="/public/img/fecbook.png" alt="" class="absolute z-10 left-[135px]">
<button class="text-[#727272] font-medium text-sm w-[300px] h-[40px] border-2 border-[#EAEAEA] rounded-[5px] hover:text-[#46A358]">Login with Facebook</button>
    </div>
        
       






</div>

</div>
</div>
    </div>
    
</template>

<script>
    export default {
        data(){
            return{
                content:'login'
            }
        },
        methods:{
            closeModal(){
                this.$emit('close')
            }
        }

    }
</script>

<style scoped>

</style>