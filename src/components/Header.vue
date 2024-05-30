<template>
  <div
    class="border-b-2 py-8 px-16 shadow fixed top-0 left-0 w-full bg-white z-[20]"
  >
    <div class="container flex justify-between gap-[50px] items-center">
      <img src="/public/img/logo.png" alt="" />
      <div class="flex gap-[50px]">
        <div
          v-for="(item, index) in menu"
          :key="index"
          class="flex gap-2 text-[#3D3D3D] text-base font-normal"
        >
          <a
            href="#"
            class="text-black font-bold border-b-4 hover:border-green-500 hover:text-green-500 border-transparent"
            >{{item}}</a
          >
        </div>
      </div>
      <div class="flex gap-[30px] items-center">
        <img src="/public/img/search.png" alt="search" />
        <img src="/public/img/korzina.png" alt="korzina" />
        <div class="flex">
          <div class="flex relative">
            <img
              src="/public/img/Logout.png"
              alt="Logout"
              class="flex absolute pt-2 pl-2"
            />
            <button
              @click="IsModal = true"
              class="h-[35px] w-[100px] border-none bg-green-500 hover:bg-[#46A358] text-white rounded-md text-center"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
    <AuthModel v-if="IsModal" @close="IsModal = false" />
  </div>
</template>

<script>
import AuthModel from "./AuthModel.vue";

export default {
  components: { AuthModel },
  data() {
    return {
      IsModal: false,
      menu:["Home","Shop","Plant Care","Blogs"]
//       menu: [
//         // {
//         //   name: "Home",
//         // },
//         // {
//         //   name: "Shop",
//         // },
//         // {
//         //   name: "Plant Care",
//         // },
//         // {
//         //   name: "Blogs",
//         // },
//       ],
    };
  },
};
</script>
