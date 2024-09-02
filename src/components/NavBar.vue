<script setup>

import ToggleButton from "@/components/toggleButton.vue";
</script>

<template>
<ul>

  <li><MyIcon>#</MyIcon> Accueil</li>
  <li><MyIcon>#</MyIcon> Qui suis-je?</li>
  <li><MyIcon>#</MyIcon> Mes Projets</li>
  <li><MyIcon>#</MyIcon> Me Contacter</li>
  <li><toggle-button></toggle-button></li>
</ul>
</template>

<style scoped>
/* CSS */
MyIcon {
  color: purple;
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
</style>