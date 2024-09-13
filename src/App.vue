<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import ProfilPicComponent from "@/components/ProfilPicComponent.vue";

const email = "arthur.desmonts@gmail.com";

const copyToClipboard = () => {
  navigator.clipboard.writeText(email).then(() => {
    document.getElementById("email-event").innerHTML = "Email copié dans le presse-papier";
    setTimeout(() => {
      document.getElementById("email-event").innerHTML = "";
    }, 1800);
  }).catch(err => {
    document.getElementById("email-event").innerHTML = "Erreur lors de la copie de l'email";
    setTimeout(() => {
      document.getElementById("email-event").innerHTML = "";
    }, 1800);
  });
};
</script>

<template>

  <div class="container">
    <NavBar></NavBar>
    <div class="HeadLine">
      <div>
        <h1>Arthur Desmonts, 20 Ans, <MyIcon>développeur Full-Stack.</MyIcon></h1>
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
      <div class="description-split">
        <p class="justify-content descriptionBox">Bonjour, je m'appelle Arthur.

          Je suis développeur Web orienté Full-Stack. J'ai obtenu un BUT informatique à l'IUT Grand Ouest Ifs. Durant mon cursus, j'ai pu acquérir de nombreuses compétences en développement, notamment en Web, en bases de données et dans le domaine du développement applicatif.

          J'ai perfectionné ces compétences au cours d'une année d'alternance dans une équipe de développeurs mobiles. J'ai pu travailler aussi bien sur Android que sur iOS. J'ai également eu l'occasion de contribuer à des projets de développement Web, plus particulièrement sur un long projet en Vue.js.
        </p>
        <p class="justify-content descriptionBox">
          Durant cette année, j'ai également manipulé plusieurs librairies d'imagerie, telles qu'OpenCV, MLKit ou encore Apple Vision. Enfin, j'ai clôturé cette expérience avec un projet utilisant de l'OCR (reconnaissance optique de caractères) pour développer différents algorithmes de reconnaissance.

          Ce que j'aime dans le développement, c'est avant tout l'élaboration de solutions créatives. J'aime me creuser la tête pour atteindre mes objectifs. Je suis enthousiaste et j'adore travailler avec des personnes passionnées. Je pense être parfaitement autonome dans mon travail, même si j'apprécie les retours sur ce que je peux améliorer.
        </p>
      </div>
    </div>
    <hr class="separateur">
    <div class="contact">
      <h2><MyIcon>#</MyIcon> Me Contacter</h2>
      <p class="justify-content">Je recherche actuellement un emploi dans le domaine du développement Web. Je suis ouvert à toutes les propositions que vous pouvez me présenter par mail. Je suis intéressé par des opportunités full remote. Cependant, si vous avez d'autres demandes ou questions, n'hésitez pas à me contacter.</p>
      <div class="mail-succes-listener">
        <button class="innerParagraphButton contact" @click="copyToClipboard">Mon mail</button>
        <p id="email-event" class="event-content"></p>
      </div>
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
  font-size: 16px;
}

.presentation {
  margin-top: 2em;
  margin-left: 2em;
  margin-right: 2em;
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

.description-split {
  display: flex;
  justify-content: space-between;
  gap: 4em;
}

.innerParagraphButton {
  margin : 1em;
}

.subTitle {
  font-size: 1em;
  font-style: italic;
}

button {
  background-color: #c16ed2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 15px;
}

button:hover {
  background-color: #a44c9e;
}

.mail-succes-listener {
  display: flex;
  align-items: center;
}

.event-content {
  margin-left: 1em;
  font-weight: bold;
  color: #c16ed2;
}
@media (max-width: 768px) {
  .container {
    padding: 1em;
  }

  .HeadLine {
    margin-left: 0;
    text-align: center;
    flex-direction: column;
  }

  .profilPic {
    margin: 1em;
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

  .innerParagraphButton {
    margin : 1em;
  }

  .mail-succes-listener {
    flex-direction: column-reverse;
    align-items: center;
  }

  .description-split {
    flex-direction: column;
    gap: 1em;
  }
}
</style>
