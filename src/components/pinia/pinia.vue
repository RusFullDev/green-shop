<script setup>
import{usePiniaStore} from '../../store/pinia'

const piniaStore = usePiniaStore()
// console.log('store',piniaStore);



</script>

<template>
    <div class="container my-[100px]">
<h1 class="text-center font-bold text-5xl mb-12">Pinia</h1>
<!-- <div class="flex gap-5">
    <h1 class="text-3xl font-semibold">{{piniaStore.count}}</h1>
    <h1 class="text-3xl font-semibold">{{piniaStore.name}}</h1>
    <button @click="piniaStore.count++" class="bg-green-500 rounded-md px-6 py-2 border-none text-2xl text-white">Increment</button>
    <button @click="piniaStore.decrement" class="bg-green-500 rounded-md px-6 py-2 border-none text-2xl text-white">Decrement</button>
    </div> -->
<div class="flex justify-between items-center gap-10 font-mono">
    <h1 class="text-center font-medium text-4xl mb-12 ">Quizzes</h1> 
    <router-link to="/create-quizze" >
        <h2 class="text-center font-medium text-3xl mb-12">Create Quizze</h2>
    </router-link>

</div>
<router-link :to="{name:'quizze-detail',params:{id:quizz.id}}" v-for="quizz in piniaStore.quizzes">
    <h2 class="font-medium text-3xl mb-12">{{ quizz.id}}.{{ quizz.theme}}</h2>
</router-link>

    </div>
</template>



<style lang="scss" scoped>

</style>