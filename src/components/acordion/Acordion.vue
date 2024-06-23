<script setup>
import { ref } from "vue";
const isOpen = ref(false);
function openAcordion() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="acardion w-[500px] mx-auto my-10">
    <div
      class="header bg-gray-700 p-4 text-white rounded-md flex justify-between items-center"
      @click="openAcordion"
    >
    <span>Click acardion</span>
    <span class="text-2xl duration-200"  :class="isOpen ? 'rotate-45'  : ''" >+</span>
    </div>
    <div
      class="body bg-gray-100 overflow-hidden duration-200"
      :class="isOpen ? 'max-h-[500px]' : 'max-h-0'"
    >
      <div class="p-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illo
        quis a odio quos, possimus, repellat mollitia, quibusdam quaerat ullam
        accusamus vitae quod excepturi temporibus architecto culpa ipsam
        voluptatum dolore tenetur incidunt? Nemo rem assumenda quod ex animi
        consectetur, eveniet saepe! Consequuntur nesciunt eos similique
        accusamus non delectus, incidunt maiores?
      </div>
    </div>
  </div>
</template>

<style scoped></style>
