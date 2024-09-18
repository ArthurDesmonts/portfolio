<script setup>

import ToggleButton from "@/components/toggleButton.vue";
import {ref} from "vue";

const isDarkTheme = ref(true);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};
</script>

<template>
  <div :class="['menu', isDarkTheme ? 'dark-theme' : 'light-theme']">
    <ul>
      <li class="phoneHided"><p>Arthur Desmonts</p></li>
      <li class="phoneHided hover-allowed"><MyIcon>#</MyIcon> Accueil</li>
      <li class="phoneHided hover-allowed"><MyIcon>#</MyIcon> Qui suis-je?</li>
      <li class="phoneHided hover-allowed"><MyIcon>#</MyIcon> Mes Projets</li>
      <li class="phoneHided hover-allowed"><MyIcon>#</MyIcon> Me Contacter</li>
      <li class="phoneHided hover-allowed"><toggle-button class="toggle" @click="toggleTheme"></toggle-button></li>
    </ul>
  </div>
</template>

<style scoped>
/* CSS */
MyIcon {
  color: #c16ed2;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  cursor: pointer;
}

p{
  margin-right: 25em;
}

.menu {
  position: fixed;
  padding-top: 1em;
  padding-bottom: 10px;
  top: 0;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  transition: background-color 0.3s;
  z-index: 2;
}

@keyframes underlineAnimation {
  from {
    text-decoration-color: transparent;
    text-underline-offset: 0;
  }
  to {
    text-decoration-color: #c16ed2;
    text-underline-offset: 5px;
  }
}

.hover-allowed:hover {
  color: #c16ed2;
  text-decoration: underline;
  animation: underlineAnimation 0.3s forwards;
}

.menu.light-theme {
  background-color: #f7f2f0;
}

.menu.dark-theme {
  background-color: #282b32;
}

@media (max-width: 768px) {
  ul {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  p {
    margin: 0 auto;
    align-self: center;
    text-align: center;
  }

  li {
    width: 100%;
    position: relative;
  }

  li:not(:first-child):not(:last-child) {
    text-align: left;
  }

  .menu {
    position: relative;
    width: 100%;
  }

  .toggle {
    visibility: hidden;
  }

  .phoneHided {
    display: none;
  }
}
</style>