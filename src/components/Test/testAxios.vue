
<script setup>
import api from "../../api"
import {ref,reactive} from 'vue'

let products = reactive([])
async function getData() {
   const result = await api.get("/products",{params:{limit:10}})
   products.push(result.data)


}
getData()

</script>

<template>
    <div v-for="item in products">
        <div>{{item.products.title}}</div>
        <div>{{item.products.description}}</div>
        <div>{{item.products.category}}</div>
        <div>{{item.products.price}}</div>
      
    </div>
</template>



<style scoped>

</style>