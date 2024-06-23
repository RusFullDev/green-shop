<script setup>
import { ref, onMounted } from 'vue';

const data = ref([]);
const editText = ref({ id: null, title: '', body: '' });
const newItem = ref({ title: '', body: '' });
const isEditModalOpen = ref(false);
const isAddModalOpen = ref(false);

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    data.value = result.slice(0, 10); // Limit to 10 items
  } catch (error) {
    console.log("error:", error);
  }
});

const deleteItem = (id) => {
  data.value = data.value.filter(item => item.id !== id);
};

const editItem = (item) => {
  editText.value = { ...item };
  isEditModalOpen.value = true;
};

const saveItem = () => {
  const index = data.value.findIndex(item => item.id === editText.value.id);
  if (index !== -1) {
    data.value[index] = { ...editText.value };
    editText.value = { id: null, title: '', body: '' };
    isEditModalOpen.value = false;
  }
};

const cancelEdit = () => {
  editText.value = { id: null, title: '', body: '' };
  isEditModalOpen.value = false;
};

const addItem = () => {
  const newId = data.value.length ? Math.max(...data.value.map(item => item.id)) + 1 : 1;
  data.value.push({ id: newId, title: newItem.value.title, body: newItem.value.body });
  newItem.value = { title: '', body: '' };
  isAddModalOpen.value = false;
};

const cancelAdd = () => {
  newItem.value = { title: '', body: '' };
  isAddModalOpen.value = false;
};
</script>
<template>
    <div>
      <h1>Test Fetch</h1>
      <div>
        <button @click="isAddModalOpen = true" class="bg-blue-500 px-5 py-3 text-lg rounded-xl mb-4">Add</button>
        <div v-for="(item, index) in data" :key="item.id" class="grid grid-rows-3 mb-4">
          <div class="border border-gray-200 w-[600px] mw-auto py-5 mb-2 p-2">
            <p><b>id: {{ item.id }}</b></p>
            <h1><b>Title: </b>{{ item.title }}</h1>
            <h2><b>Theme: </b>{{ item.body }}</h2>
          </div>
          <div class="flex gap-2">
            <button @click="editItem(item)" class="bg-gray-500 px-5 py-3 text-lg rounded-xl">Edit</button>
            <button @click="deleteItem(item.id)" class="bg-gray-500 px-5 py-3 text-lg rounded-xl">Delete</button>
          </div>
        </div>
      </div>
  
      <!-- Edit Modal -->
      <div v-if="isEditModalOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-5 rounded-xl w-[400px]">
          <h2 class="text-xl mb-4">Edit Item</h2>
          <input v-model="editText.title" class="block mb-2 p-2 w-full border" placeholder="Edit title" />
          <input v-model="editText.body" class="block mb-2 p-2 w-full border" placeholder="Edit body" />
          <div class="flex gap-2">
            <button @click="saveItem" class="bg-green-500 px-5 py-3 text-lg rounded-xl">Save</button>
            <button @click="cancelEdit" class="bg-red-500 px-5 py-3 text-lg rounded-xl">Cancel</button>
          </div>
        </div>
      </div>
  
      <!-- Add Modal -->
      <div v-if="isAddModalOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-5 rounded-xl w-[400px]">
          <h2 class="text-xl mb-4">Add Item</h2>
          <input v-model="newItem.title" class="block mb-2 p-2 w-full border" placeholder="New title" />
          <input v-model="newItem.body" class="block mb-2 p-2 w-full border" placeholder="New body" />
          <div class="flex gap-2">
            <button @click="addItem" class="bg-green-500 px-5 py-3 text-lg rounded-xl">Add</button>
            <button @click="cancelAdd" class="bg-red-500 px-5 py-3 text-lg rounded-xl">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  