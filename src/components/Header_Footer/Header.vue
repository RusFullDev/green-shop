<script setup>
import { ref } from 'vue';
import AuthModel from '../../components/authComponent/AuthModel.vue';

const IsModal = ref(false);

function toggleModal() {
  IsModal.value = !IsModal.value;
}
</script>

<template>
  <div class="border-b-2 py-8 px-16 shadow fixed top-0 left-0 w-full bg-white z-[20]">
    <div class="container flex justify-between gap-[50px] items-center">
      <img src="/public/img/logo.png" alt="" />
      <div class="flex gap-[50px]">
        <div class="flex gap-5 text-[#3D3D3D] text-base font-normal">
          <router-link to="/home" class="text-black font-bold border-b-4 border-transparent [&.router-link-active]:border-green-500 [&.router-link-active]:text-green-500">Home</router-link>
          <router-link to="/shop" class="text-black font-bold border-b-4 border-transparent [&.router-link-active]:border-green-500 [&.router-link-active]:text-green-500">Shop</router-link>
          <router-link to="/plant-care" class="text-black font-bold border-b-4 border-transparent [&.router-link-active]:border-green-500 [&.router-link-active]:text-green-500">Plant Care</router-link>
          <router-link to="/blogs" class="text-black font-bold border-b-4 border-transparent [&.router-link-active]:border-green-500 [&.router-link-active]:text-green-500">Blogs</router-link>
          <router-link to="/test" class="text-black font-bold border-b-4 border-transparent [&.router-link-active]:border-green-500 [&.router-link-active]:text-green-500">Acordion</router-link>
          <!-- <router-link to="/composible" class="text-black font-bold border-b-4 border-transparent [&.router-link-active]:border-green-500 [&.router-link-active]:text-green-500">Composible</router-link> -->
          <router-link to="/products-shop" class="text-black font-bold border-b-4 border-transparent [&.router-link-active]:border-green-500 [&.router-link-active]:text-green-500">Products</router-link>
          <router-link to="/vuex" class="text-black font-bold border-b-4 border-transparent [&.router-link-active]:border-green-500 [&.router-link-active]:text-green-500">Vuex</router-link>
          <router-link to="/favorites" class="text-black font-bold border-b-4 border-transparent [&.router-link-active]:border-green-500 [&.router-link-active]:text-green-500">Favorites</router-link>
          <router-link to="/pinia" class="text-black font-bold border-b-4 border-transparent [&.router-link-active]:border-green-500 [&.router-link-active]:text-green-500">Pinia</router-link>
        </div>
      </div>
      <div class="flex gap-[30px] items-center">
        <img src="/public/img/search.png" alt="search" />
        <img src="/public/img/korzina.png" alt="korzina" />
        <div class="flex">
          <div class="flex relative">
            <img src="/public/img/Logout.png" alt="Logout" class="flex absolute pt-2 pl-2" />
            <button @click="toggleModal" class="h-[35px] w-[100px] border-none bg-green-500 hover:bg-[#46A358] text-white rounded-md text-center">Login</button>
          </div>
        </div>
      </div>
    </div>
    <AuthModel v-if="IsModal" @close="IsModal = false" />
  </div>
</template>

<style scoped>

</style>
