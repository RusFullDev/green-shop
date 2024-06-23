<script setup>
import { ref } from "vue";

// Инициализация данных для нового опроса
const newQuizz = ref({
  id: "",
  theme: "",
  questions: [
    {
      id: 1,
      question: "",
      options: [
        {
          id: 1,
          text: "",
        },
        {
          id: 2,
          text: "",
        },
      ],
      answer: "",
      selectAnswer: 0,
    },
  ],
});

// Добавление нового варианта ответа
const addOption = (id) => {
  const question = newQuizz.value.questions.find((q) => q.id === id);
  if (question.options.length < 4) {
    question.options.push({
      id: question.options.length + 1,
      text: "",
    });
  }
};

// Удаление варианта ответа
const removeOption = (questionId, answerId) => {
  const question = newQuizz.value.questions.find((q) => q.id === questionId);
  if (question.options.length > 2) {
    question.options = question.options.filter((item) => item.id !== answerId);
  }
};

// Добавление нового вопроса
const addQuestion = () => {
  newQuizz.value.questions.push({
    id: newQuizz.value.questions.length + 1,
    question: "",
    options: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
    ],
    answer: "",
    selectAnswer: 0,
  });
};

// Удаление вопроса
const removeQuiz = (questionId) => {
  newQuizz.value.questions = newQuizz.value.questions.filter(
    (q) => q.id !== questionId
  );
};

// Сохранение опроса
const saveQuiz = () => {
  console.log("Quiz saved:", newQuizz.value);
};
</script>

<template>
  <div class="container my-[100px]">
    <h1 class="text-3xl font-mono font-medium text-center mb-5">
      Create quizze
    </h1>
    <div>
      <input
        type="text"
        placeholder="theme......"
        v-model="newQuizz.theme"
        class="text-2xl border p-4 w-full focus:outline-none focus:border-yellow-400 rounded-md"
      />
      <div v-for="question in newQuizz.questions" :key="question.id" class="my-5">
        <div class="flex gap-2">
          <input
            type="text"
            placeholder="question......"
            v-model="question.question"
            class="text-2xl border p-2 w-full focus:outline-none focus:border-yellow-400 rounded-md"
          />
          <button @click="removeQuiz(question.id)" class="px-4 rounded-md py-2 text-xl bg-red-500 hover:text-white">
            Remove
          </button>
        </div>
        <div v-for="answer in question.options" :key="answer.id" class="my-5">
          <div class="inline-flex flex-row-reverse gap-4 text-lg font-medium font-mono cursor-pointer items-center">
            <button @click="removeOption(question.id, answer.id)" v-if="question.options.length > 2" class="px-6 rounded-md py-2 text-xl bg-red-500 hover:text-white">
              Remove
            </button>
            <input
              type="text"
              placeholder="option......"
              v-model="answer.text"
              class="text-2xl border p-2 rounded-md w-full focus:outline-none focus:border-yellow-400"
            />
            <input type="radio" :id="`${question.id}-${answer.id}`" :name="'q'+question.id" v-model="question.selectAnswer" :value="answer.id"/>
          </div>
        </div>
        <button @click="addOption(question.id)" v-if="question.options.length < 4" class="px-6 rounded-md py-2 text-xl bg-green-500 hover:text-white">
          Add option
        </button>
      </div>
    </div>
    <div class="flex justify-end gap-5">
      <button @click="addQuestion" class="px-6 rounded-md py-2 text-xl bg-green-500 hover:text-white">
        Add question
      </button>
      <button @click="saveQuiz" class="px-6 rounded-md py-2 text-xl bg-green-500 hover:text-white">
        Save
      </button>
    </div>
  </div>
</template>

<style scoped></style>
