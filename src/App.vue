<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";

const isDarkTheme = ref(false);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  if (isDarkTheme.value) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
};
</script>

<template>
  <NavBar></NavBar>
  <h1>Arthur Desmonts, développeur Full-Stack.</h1>
  <p>Diplômé d'un BUT Informatique (BAC +3)</p>
  <button>Me Contacter</button>
  <button @click="toggleTheme">Theme sombre</button>
</template>

<style scoped>
/* CSS */

</style>
