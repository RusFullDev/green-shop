<script setup>
import { ref } from 'vue';
import PageNumber from './PageNumber.vue';
import Dropdown from './Dropdown.vue';
import { flowers } from '../../static/products.js';

const isShowMenu = ref(false);

function changeShow() {
  isShowMenu.value = !isShowMenu.value;
}

</script>

<template>
  <div>
    <div class="flex justify-between pb-7">
      <div class="flex gap-[37px]">
        <button class="hover:text-green-500">All Plants</button>
        <button class="hover:text-green-500">New Arrivals</button>
        <button class="hover:text-green-500">Sale</button>
      </div>
      <div class="relative flex gap-1">
        <h2>Sort by:</h2>
        <div @click="changeShow" class="flex gap-1 cursor-pointer">
          <a href="#" class="hover:text-green-500">Default sorting</a>
          <img
            src="/public/img/Arrow - Down 2.png"
            alt=""
            :class="[isShowMenu ? 'rotate-180' : 'rotate-0', 'duration-200']"
          />
          <Dropdown v-if="isShowMenu" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-[33px] items-center mb-[90px]">
      <div
        v-for="(item, index) in flowers"
        :key="index" :data="item"
        @mouseover="item.hover = true"
        @mouseleave="item.hover = false"
      >
        <div>
          <div class="relative">
            <img :src="item.img" alt="flowers" />
            <div
              class="flex justify-center gap-3 left-1/4 absolute"
              :class="{ hidden: !item.hover }"
            >
              <button><img :src="item.card" alt="" /></button>
              <button><img :src="item.like" alt="" /></button>
              <button><img :src="item.search" alt="" /></button>
            </div>
            <div>
              <h3 class="text-[#3D3D3D] text-base leading-4 font-normal pt-5">
                {{ item.name }}
              </h3>
              <div class="flex gap-2">
                <p class="text-[#46A358] text-lg leading-4 font-bold">
                  {{ item.price }}
                </p>
                <p
                  v-if="item.oldPrice"
                  class="text-[#A5A5A5] text-lg leading-4 font-normal line-through"
                >
                  {{ item.oldPrice }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageNumber />
  </div>
</template>

<style scoped>

</style>
