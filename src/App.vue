<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import ToggleButton from "@/components/toggleButton.vue";
</script>

<template>
  <div class="container">
    <NavBar></NavBar>
    <h1>Arthur Desmonts, développeur Full-Stack.</h1>
    <p>Diplômé d'un BUT Informatique (BAC +3)</p>
    <h2><MyIcon>#</MyIcon> Qui suis-je?</h2>
    <p>Bonjour, Je suis Arthur.

      Je suis alternant en développement mobile, passionné de développement. J'ai obtenu un but informatique à l'IUT Grand Ouest Ifs. Durant mon cursus, j'ai pu acquérir de nombreuses compétences en développement, notamment en Web, en base de données et en programmation orientée objet.

      Ce que j'aime à travers le développement, c'est avant tout l'élaboration de solutions créatives résultant d'une contrainte. J'aime me creuser la tête pour parvenir à atteindre mes objectifs. Je suis enthousiaste et adore travailler avec des personnes passionnées.

    </p>
    <h2><MyIcon>#</MyIcon> Me Contacter</h2>
    <p>Je suis intéressé par des opportunités full remote. Cependant, si vous avez d'autres demandes ou questions, n'hésitez pas à me contacter.</p>
    <button>Me Contacter</button>
  </div>
</template>

<style scoped>
/* CSS */
MyIcon {
  color: purple;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
