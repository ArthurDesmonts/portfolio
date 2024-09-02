<script setup>

import ToggleButton from "@/components/toggleButton.vue";
</script>

<template>
  <div class="menu">
    <ul>
      <li><p>Arthur Desmonts</p></li>
      <li><MyIcon>#</MyIcon> Accueil</li>
      <li><MyIcon>#</MyIcon> Qui suis-je?</li>
      <li><MyIcon>#</MyIcon> Mes Projets</li>
      <li><MyIcon>#</MyIcon> Me Contacter</li>
      <li><toggle-button class="toggle"></toggle-button></li>
    </ul>
  </div>
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

p{
  margin-right: 25em;
}

.menu {
  position: fixed;
  margin-top: 1em;
  top: 0;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
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
}
</style>