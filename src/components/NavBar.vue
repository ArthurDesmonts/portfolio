<script setup>

import ToggleButton from "@/components/toggleButton.vue";
import {ref} from "vue";

const isDarkTheme = ref(true);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

window.onscroll = function() {
  const menu = document.getElementById('menu');
  if( window.scrollY > 0) {
    menu.style.width = "100%";
    menu.style.transition = "0.2s";
  } else {
    menu.style.width = "80%";
  }
};
</script>

<template>
  <div id="menu" :class="['menu', isDarkTheme ? 'dark-theme' : 'light-theme']">
    <ul>
      <li class="phoneHided no-cursor"><p class="restricted-display-responsive-bar">Arthur Desmonts</p></li>
      <li class="phoneHided hover-allowed" @click="scrollToSection()"><span class="icon">#</span> Accueil</li>
      <li class="phoneHided hover-allowed" @click="scrollToSection('about')"><span class="icon">#</span> Qui suis-je?</li>
      <li class="phoneHided hover-allowed" @click="scrollToSection('project')"><span class="icon">#</span> Mes Projets</li>
      <li class="phoneHided hover-allowed" @click="scrollToSection('contact')"><span class="icon">#</span> Me Contacter</li>
      <li class="phoneHided hover-allowed"><toggle-button class="toggle" @click="toggleTheme"></toggle-button></li>
    </ul>
  </div>
</template>
<style scoped>
/* CSS */
.icon {
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
  font-family: 'Consolas', monospace;
  backdrop-filter: blur(10px);
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

.no-cursor {
  cursor: default;
}

.menu.light-theme {
  background-color: rgb(230, 219, 216, 0.8);
}

.menu.dark-theme {
  background-color: rgb(40, 43, 50, 0.8);
}

@media (max-width: 1450px) {
  .menu {
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    margin-right: 1em;
    padding-right: 1em;
  }

  ul {
    flex-direction: row;
    justify-content: space-between;
  }

  li {
    width: auto;
    text-align: center;
  }

  p {
    margin: 0 auto;
    text-align: center;
  }

  .restricted-display-responsive-bar {
    display: none;
  }
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