<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import ProfilPicComponent from "@/components/ProfilPicComponent.vue";
</script>

<template>

  <div class="container">
    <NavBar></NavBar>
    <div class="HeadLine">
      <div>
        <h1>Arthur Desmonts, <MyIcon>développeur Full-Stack.</MyIcon></h1>
        <p class="subTitle">Diplômé d'un BUT Informatique (BAC +3) - parcours
          réalisation d'applications :
          conception, développement,
          validation</p>
      </div>
      <ProfilPicComponent class="profilPic"></ProfilPicComponent>
    </div>
    <hr class="separateur">
    <div class="presentation">
      <h2><MyIcon>#</MyIcon> Qui suis-je?</h2>
        <p class="justify-content descriptionBox">Bonjour, Je suis Arthur.

          Je suis alternant en développement mobile, passionné de développement. J'ai obtenu un but informatique à l'IUT Grand Ouest Ifs. Durant mon cursus, j'ai pu acquérir de nombreuses compétences en développement, notamment en Web, en base de données et en programmation orientée objet.

          Ce que j'aime à travers le développement, c'est avant tout l'élaboration de solutions créatives résultant d'une contrainte. J'aime me creuser la tête pour parvenir à atteindre mes objectifs. Je suis enthousiaste et adore travailler avec des personnes passionnées.

        </p>
    </div>
    <hr class="separateur">
    <div class="contact">
      <h2><MyIcon>#</MyIcon> Me Contacter</h2>
      <p class="justify-content">Je suis intéressé par des opportunités full remote. Cependant, si vous avez d'autres demandes ou questions, n'hésitez pas à me contacter.</p>
      <button class="innerParagraphButton">Me Contacter</button>
    </div>
  </div>
</template>

<style scoped>
/* CSS */
MyIcon {
  color: #c16ed2;
}

.container {
  padding: 5em 1em 0 1em;
}

.HeadLine {
  padding-top: 10px;
  margin-left: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.justify-content {
  text-align: justify;
  padding : 1em;
}

.presentation {
  margin-top: 2em;
  margin-right: 60%;
  margin-left: 2em;
}

.contact {
  margin-top: 2em;
  margin-left: 60%;
  margin-right: 2em;
}

.separateur {
  margin-top: 2em;
  margin-left: 5em;
  margin-right: 5em;
  border: 1px solid #c16ed2;
}

.innerParagraphButton {
  margin : 1em;
}

.subTitle {
  font-size: 1em;
  font-style: italic;
}

@media (max-width: 768px) {
  .container {
    padding: 1em;
  }

  .HeadLine {
    margin-left: 0;
    text-align: center;
  }

  .presentation {
    margin: 0;
  }

  .contact {
    margin: 0;
  }

  .separateur {
    margin: 1em;
  }
}
</style>
