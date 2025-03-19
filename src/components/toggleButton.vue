<script setup>
import { ref, watch, onMounted } from "vue";

const checked = ref(localStorage.getItem('theme') !== 'light');

const toggleTheme = () => {
  if (checked.value) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('gradient-background-light');
    document.body.classList.add('gradient-background-dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.remove('gradient-background-dark');
    document.body.classList.add('gradient-background-light');
    localStorage.setItem('theme', 'light');
  }
};

watch(checked, () => {
  toggleTheme();
});

onMounted(() => {
  toggleTheme();
});
</script>

<template>
  <div class="toggle-container" :class="{ 'toggle-container-checked': checked }" @click="checked = !checked">
    <div class="toggle-button"></div>
  </div>
</template>

<style scoped>
.toggle-container {
  width: 60px;
  height: 34px;
  background-color: #ccc;
  border-radius: 34px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
}

.toggle-container-checked {
  background-color: color(display-p3 0.57 0.373 0.791);
}

.toggle-button {
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: left 0.2s;
}
.toggle-container-checked .toggle-button {
  left: 30px;
}
</style>