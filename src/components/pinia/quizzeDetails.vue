<script setup>

import{useRoute} from "vue-router"
import {usePiniaStore} from '../../store/pinia'

const route = useRoute()
const piniaStore = usePiniaStore()

const currentQuizze = piniaStore.quizzes.find((item) => item.id == route.params.id)


</script>

<template>
    <div class="container my-[100px]">
<h1 class="text-center font-semibold font-mono text-4xl mb-12">{{currentQuizze.theme}}</h1> 
<div class="mb-2" v-for="question in currentQuizze.questions" :key="question.id">
    <h2 class="text-xl font-sans font-medium">{{ question.id}}) {{ question.question}}</h2>
    <div v-for="answer in question.options" :key="answer.id" >
        <label  class=" pl-2 inline-flex flex-row-reverse gap-4 text-lg font-medium font-mono cursor-pointer item-center">
            {{answer.text}}
            <input type="radio"  :name="question.id">
        </label>

    </div>

</div>
    </div>
</template>



<style  scoped>

</style>