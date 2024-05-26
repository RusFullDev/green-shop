<template>
    <div>
<div class="w-[500px] h-[600px]">
    <div class="flex items-center divide-x-2">
       <a href="#" class="hover:text-[#46A358] text-[#3D3D3D] text-xl leading-4 font-medium">Login</a> 
       <a href="#" class="hover:text-[#46A358] text-[#3D3D3D] text-xl leading-4 font-medium">Register</a> 
    </div >
    <p class="text-xs font-normal text-[#3D3D3D]">Enter your username and password to login.</p>
    <input type="text" placeholder="almamun_uxui@outlook.com" class="w-[300px] h-[40px] border-1 rounded-[5px]">
    <input type="password" placeholder="12345" class="w-[300px] h-[40px] border-1 rounded-[5px]">
    <p class="hover:text-[#46A358] text-[#3D3D3D] text-xs leading-4 font-normal">Forgot Password?</p>
    <button class="w-[300px] h-[40px] border-1 rounded-[5px] text-[#3D3D3D] bg-slate-500 hover:bg-[#46A358] hover:text-white font-medium text-sm">Login</button>
<p class="text-xs font-normal text-[#3D3D3D]">Or login with</p>
<div class="flex ">
<img src="/public/img/google 1.png" alt="google">
<button class="text-[#727272] font-medium text-sm w-[300px] h-[40px] border-1 rounded-[5px]  bg-slate-500 hover:bg-[#46A358] hover:text-white">Login with Google</button>
</div >

<div class="flex">
<img src="/public/img/fecbook.png" alt="">
<button class="text-[#727272] font-medium text-sm w-[300px] h-[40px] border-1 rounded-[5px]  bg-slate-500 hover:bg-[#46A358] hover:text-white">Login with Facebook</button>
</div>
</div>




</div>
</template>

<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
</style>