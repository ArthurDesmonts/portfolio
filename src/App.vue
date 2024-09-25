<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import ProfilPicComponent from "@/components/ProfilPicComponent.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";


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


const handleCardExpansion = (titleText) => {
  document.querySelectorAll('.card').forEach(card => {
    if (titleText === "reset") {
      card.style.display = 'block';
      return;
    }
    if (card.querySelector('h2').innerText !== titleText) {
      card.style.display = 'none';
    }
  });
};
</script>

<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="HeadLine">
      <div>
        <h1>Arthur Desmonts, 20 Ans, <span class="icon">développeur Full-Stack.</span></h1>
        <p class="subTitle">Diplômé d'un BUT Informatique (BAC +3) - parcours
          réalisation d'applications :
          conception, développement,
          validation</p>
      </div>
      <ProfilPicComponent class="profilPic"></ProfilPicComponent>
    </div>
    <hr id="about" class="separateur">
    <div class="presentation">
      <h2><span class="icon">#</span> Qui suis-je?</h2>
      <div class="description-split">
        <p class="justify-content descriptionBox no-after">Bonjour, je m'appelle Arthur.

          Je suis développeur Web orienté Full-Stack. J'ai obtenu un BUT informatique à l'IUT Grand Ouest Ifs. Durant mon cursus, j'ai pu acquérir de nombreuses compétences en développement, notamment en Web, en bases de données et dans le domaine du développement applicatif.

          J'ai perfectionné ces compétences au cours d'une année d'alternance dans une équipe de développeurs mobiles. J'ai pu travailler aussi bien sur Android que sur iOS. J'ai également eu l'occasion de contribuer à des projets de développement Web, plus particulièrement sur un long projet en Vue.js.
        </p>
        <p class="justify-content descriptionBox no-before">
          Durant cette année, j'ai également manipulé plusieurs librairies d'imagerie, telles qu'OpenCV, MLKit ou encore Apple Vision. Enfin, j'ai clôturé cette expérience avec un projet utilisant de l'OCR (reconnaissance optique de caractères) pour développer différents algorithmes de reconnaissance.

          Ce que j'aime dans le développement, c'est avant tout l'élaboration de solutions créatives. J'aime me creuser la tête pour atteindre mes objectifs. Je suis enthousiaste et j'adore travailler avec des personnes passionnées. Je pense être parfaitement autonome dans mon travail, même si j'apprécie les retours sur ce que je peux améliorer.
        </p>
      </div>
    </div>
    <hr id="project" class="separateur">
    <div class="presentation">
      <h2><span class="icon">#</span> Mes projets</h2>
      <p class="justify-content descriptionBox">Malheureusement, je n'ai pas utilisé mon compte GitHub pour mes projets professionnels. De même, la plupart de mes répertoires universitaires étaient sur le serveur Git de l'université. Cependant, je peux néanmoins vous décrire en détail ceux que je trouve les plus aboutis et concrets.</p>
      <div class="card-alignement">
        <Card @expand-card="handleCardExpansion($event)" titleText="Imagerie" html="Création d'un scanner de document à l'aide d'un smartphone." image="openCv.png"></Card>
        <Card @expand-card="handleCardExpansion($event)" titleText="OCR" html="Utilisation d'un OCR sur des documents scannés, interprétation des résultats, algorithme de reconnaissance des erreurs." image="mlkit.png"></Card>
        <Card @expand-card="handleCardExpansion($event)" titleText="Vue.js" html="Élaboration de différentes interfaces, test des limites du framework, rédaction d'une documentation complète pour des novices." image="logo.svg"></Card>
      </div>
    </div>
    <hr class="separateur">
    <div id="hobbies" class="double-container">
        <div class="loisir">
          <h2><span class="icon">#</span> Loisirs</h2>
          <p class="justify-content">Passionné de cyclisme sur route, je trouve dans ce sport un excellent
            moyen de me détendre, de me vider l’esprit, et de maintenir ma forme
            physique.</p>
        </div>
        <div id="contact" class="contact">
          <h2><span class="icon">#</span> Me Contacter</h2>
          <p class="justify-content">Je recherche actuellement un emploi dans le domaine du développement Web. Je suis ouvert à toutes les propositions que vous pouvez me présenter par mail. Je suis intéressé par des opportunités full remote. Cependant, si vous avez d'autres demandes ou questions, n'hésitez pas à me contacter.</p>
          <div class="mail-succes-listener">
            <button class="innerParagraphButton contact" @click="copyToClipboard">Mon mail</button>
            <p id="email-event" class="event-content"></p>
          </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
/* CSS */
.icon {
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
  margin-top: 1em;
  text-align: justify;
  padding: 1em;
  font-size: 16px;
  position: relative;
}

.justify-content::before,
.justify-content::after {
  content: '“';
  font-size: 2em;
  color: #c16ed2;
  position: absolute;
  font-weight: bold;
}

.justify-content::before {
  left: -0.5em;
  top: -0.5em;
}

.justify-content::after {
  content: '”';
  right: -0.5em;
  bottom: -0.5em;
}

.no-after::after {
  content: none;
}

.no-before::before {
  content: none;
}

.presentation {
  margin-top: 2em;
  margin-left: 2em;
  margin-right: 2em;
}

.contact {
  margin-top: 2em;
  margin-right: 2em;
  margin-left: 15%;
}

.loisir {
  margin-top: 2em;
  margin-left: 2em;
  margin-right: 10%;
}

.separateur {
  margin: 4em 5em;
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

.card-alignement {
  align-items: center;
  display: flex;
  justify-content: space-around;
  gap: 1em;
}

.event-content {
  margin-left: 1em;
  font-weight: bold;
  color: #c16ed2;
}

.double-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1em;
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

  .loisir {
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

  .card-alignement {
    flex-direction: column;
    gap: 1em;
  }

  .double-container {
    flex-direction: column;
    gap: 1em;
  }

  .justify-content::before,
  .justify-content::after {
    content: '“';
    font-size: 1.5em;
    color: #c16ed2;
    position: absolute;
    font-weight: bold;
  }

  .justify-content::before {
    left: -0.1em;
    top: -0.1em;
  }

  .justify-content::after {
    content: '”';
    right: -0.1em;
    bottom: -0.1em;
  }

  .no-after::after {
    content: none;
  }

  .no-before::before {
    content: none;
  }
}
</style>
