<script setup>
import Acordion from '../components/acordion/Acordion.vue';
import TestAxios from '../components/Test/testAxios.vue';
import TestFech from '../components/Test/testFech.vue';
</script>

<template>
    <div class="pt-[100px]">
        <Acordion/>
        <button  v-tooltip="Clicked" class="py-3 px-6 bg-gray-500 rounded-md">Click Me</button>
<!-- <TestFech/> -->
<!-- <TestAxios/> -->
    </div>
</template>



<style  scoped>

</style>