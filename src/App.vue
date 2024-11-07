<script setup>
import {onMounted, ref, watch} from "vue";
import NavBar from "@/components/NavBar.vue";
import ProfilPicComponent from "@/components/ProfilPicComponent.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
import DownloadButton from "@/components/DownloadCV.vue";
import StackComponent from "@/components/StackComponent.vue";
import { globalAppearsController, typingEffect } from "@/utils/AnimationObserverController.js";
import MailSender from "@/components/MailSender.vue";

const showMailSender = ref(false);

const copyToClipboard = () => {
    showMailSender.value = !showMailSender.value;
};

const handleCardExpansion = (titleText) => {
  document.querySelectorAll('.card').forEach(card => {
    const developButton = card.querySelector('#developButton');
    if (titleText === "reset") {
      card.style.display = 'block';
      if (developButton) {
        developButton.style.display = 'block';
      }
      return;
    }
    if (card.querySelector('h2').innerText !== titleText) {
      if (developButton) {
        developButton.style.display = 'none';
      }
    }
  });
};

//responsive before line for vertical-align title in card
onMounted(() => {
  const verticalAlignElements = document.querySelectorAll('.vertical-align');
  verticalAlignElements.forEach((element) => {
    const textLength = element.innerText.length;
    let newHeight = '';
    if (window.innerWidth < 768) {
      newHeight = `${textLength}em`;
    } else {
      newHeight = `${textLength + 1}em`;
    }
    element.style.setProperty('--before-height', newHeight);
  });

  //observer for typing animation
  typingEffect();

  //observer for appears animation
  globalAppearsController();
});
</script>

<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="HeadLine">
      <div>
        <div class="typing-effect-container">
          <h1>Arthur Desmonts, <br> Développeur <span class="icon typing-effect">Full-Stack<span class="not-icon">.</span></span></h1>
        </div>
        <p class="subTitle">Diplômé d'un BUT Informatique (BAC +3) - parcours
          réalisation d'applications :
          conception, développement,
          validation</p>
      </div>
      <ProfilPicComponent class="profilPic appears-scale-increase"></ProfilPicComponent>
    </div>
    <hr id="about" class="separateur">
    <div class="presentation">
      <h2><span class="icon">#</span> Qui suis-je?</h2>
      <div class="description-split">
        <p class="justify-content descriptionBox no-after appears-left">Bonjour, je m'appelle Arthur.

          Je suis développeur Web orienté <span class="icon">Full-Stack</span>, avec une préférence pour le <span class="icon">Front-End</span>. J'ai obtenu un BUT informatique à l'IUT Grand Ouest Ifs. Pendant mon cursus, j'ai pu acquérir de nombreuses compétences en développement, principalement en <span class="icon">Web</span>, en <span class="icon">bases de données</span>
          ainsi qu'en <span class="icon">applicatif</span>.

          J'ai perfectionné ces compétences au cours d'<span class="icon">une année d'alternance</span> dans une petite équipe de développeurs mobiles. En leur compagnie, j'ai pu travailler aussi bien sur <span class="icon">Android</span> que sur <span class="icon">iOS</span>. Enfin, l'occasion s'est présentée de contribuer à des projets de développement Web, plus particulièrement sur un large projet <span class="icon">Vue.js</span>.
        </p>
        <p class="justify-content descriptionBox no-before appears-right">
          Pendant cette année, j'ai également manipulé plusieurs librairies d'<span class="icon">imagerie</span>, telles qu'<span class="icon">OpenCV</span>, <span class="icon">MLKit</span> ou encore <span class="icon">Apple Vision</span>. Cela m'a permis de clôturer cette expérience avec un projet basé sur de l'<span class="icon">OCR</span> (reconnaissance optique de caractères) pour développer différents algorithmes de reconnaissance.
          Ce que j'aime dans le développement, c'est avant tout l'élaboration de solutions créatives.
          Je suis <span class="icon">enthousiaste</span> et j'adore travailler avec des personnes passionnées. L’autonomie n’est pas un problème pour moi, même si j'apprécie les retours sur ce que je peux améliorer.
        </p>
      </div>
    </div>
    <hr id="project" class="separateur">
    <div class="presentation appears-top">
      <h2><span class="icon">#</span> Mes projets récents</h2>
      <div class="card-alignement">
        <div class="inner-text-card-align">
          <p class="vertical-align">IMAGERIE</p>
          <Card @expand-card="handleCardExpansion($event)" id="1" titleText="imagerie" html="Création d'un <span class='underline'>scanner de document</span> à l'aide d'un smartphone. Suppression <span class='underline'>automatique</span> de l'arrière-plan." image="openCv.png"
                subTitle="Utilisation de <span class='icon'>OpenCV</span>"
                first-block="Pour être plus précis, j'ai réalisé un détourage automatique à partir de la caméra d'un smartphone. C'est-à-dire que sur une photo, j'ai utilisé les différentes méthodes que propose OpenCV pour faire des traitements optiques.
                Cela, dans le but de faire gagner du temps à l'utilisateur qui doit prendre de nombreuses photos tout au long de la journée (contexte de déplacement avec durée limitée), mais également pour une démarche de confort (suppression d'une tâche manuelle répétitive)."
                second-block="<span class='underline'>J'ai notamment axé mon développement sur les points suivants :</span>"
                listOfSkills="Développement de l'interface utilisateur - Création de l'algorithme principal - Optimisation de l'algorithme, amélioration des performances - Conversion vers iOS (l'application métier étant en natif)"
                third-block="Comme dit précédemment, je ne peux pas fournir de preuve physique de ce projet, appartenant à mon ancienne entreprise. Néanmoins, je peux conclure sur le fait que ce projet fut ma première expérience en terme de projet professionnel avec des exigences. J'ai fait face à un algorithme complexe vis-à-vis des exigences imposées. Enfin, j'ai eu un réel aperçu de la résolution de bugs et de l'optimisation de performances."></Card>
        </div>
        <div class="inner-text-card-align">
          <p class="vertical-align">OCR</p>
          <Card @expand-card="handleCardExpansion($event)" id="2" titleText="ocr" html="Utilisation d'un <span class='underline'>OCR</span> sur des documents scannés, <span class='underline'>interprétation</span> des résultats, <span class='underline'>algorithme de reconnaissance des erreurs</span>." image="mlkit.png"
                subTitle = "Utilisation de <span class='icon'>MLKit</span> et <span class='icon'>Apple Vision</span>"
                first-block="J'ai travaillé sur un projet de reconnaissance de caractères. J'ai utilisé MLKit et Apple Vision pour interpréter des documents scannés. L'objectif de ce projet était dans un premier temps de rechercher les API d'OCR les plus performantes, fiables, maintenanables, et enfin adaptables sur les deux plateformes (iOS et Android). MLKIT étant une librairie Google, j'ai dû également me pencher sur Apple Vision pour la partie iOS.
                Une fois mes recherches effectuées, j'ai dans un premier temps ajusté à l'aide de l'API, la réception des caractères sur l'image. Puis, j'ai implémenté différentes méthodes de traitement pour améliorer la qualité de la reconnaissance, telles qu'un score de confiance ou encore un score d'isolement des mots. Enfin, viens le développement d'un algorithme de reconnaissance des erreurs, pour ne conserver qu'une partie des éléments récupérés."
                second-block="<span class='underline'>Dans la globalité, j'ai pu travailler sur les points suivants :</span>"
                listOfSkills="Recherche des API les plus performantes - Développement de l'interface utilisateur - Création de l'algorithme principal - Optimisation de l'algorithme, amélioration des performances - Algorithme de détection des erreurs (instauration de contextes) - Conversion vers iOS (l'application métier étant en natif)"
                third-block="Ce projet a été une première en termes de recherche d'API et de développement d'algorithmes de reconnaissance. J'ai pu découvrir les différentes méthodes de traitement de texte et de la gestion des contextes. Enfin, j'ai réellement pu être autonome sur ce projet en ce qui concerne la recherche de solutions et la mise en place de ces dernières."
          ></Card>
        </div>
        <div class="inner-text-card-align">
          <p class="vertical-align">VUE.JS</p>
          <Card @expand-card="handleCardExpansion($event)" id="3" titleText="vue.js" html="Élaboration <span class='underline'>d'interfaces</span>, test des limites du framework, rédaction d'une documentation complète pour des novices." image="logo.svg"
                subTitle="Développement d'interfaces avec <span class='icon'>Vue.js</span>"
                first-block="Ce projet de développement frontend en Vue.js avait pour but de me laisser carte blanche quant à l'apprentissage de Vue3. L'objectif était de me familiariser avec le framework, de tester ses limites, et de rédiger une documentation complète pour les développeurs de l'équipe qui ne l'avaient jamais manipulé et qui, de plus, ne sont pas familiers avec JavaScript. Tout cela avec pour ocjectif de juger si le framework serait une bonne opportunité pour une migration de l'application Web actuelle.
                J'ai donc développé plusieurs interfaces en utilisant les différentes fonctionnalités de Vue3, mais également, j'ai testé les différentes façons de remplacer les fonctionnalités de l'application actuelle, majoritairement liées à la création de formulaires dynamiques ou encore aux appels AJAX."
                second-block="<span class='underline'>Je peux synthétiser mon travail sur les points suivants :</span>"
                list-of-skills="Développement de formulaires - Développement d'une SPA entièrement dynamique - Élaboration d'une API REST pour simuler des appels de formulaire sur le serveur (Spark : serveur, Axios : client) - Test des limites du framework - Gestion du déploiement - Rédaction de la documentation"
                third-block="Ce projet fut ma première expérience de développement Web dans le milieu professionnel. J'ai pu découvrir les différentes méthodes de développement frontend. Enfin, l'utilisation de Vue3 m'a permis de mieux connaitre les frameworks JavaScript, et Vue en particulier me donne envie de continuer dans cette voix."
          ></Card>
        </div>
      </div>
      <div class="card-alignement margin-top">
        <div class="inner-text-card-align">
          <p class="vertical-align">TYPE FASTER</p>
          <Card @expand-card="handleCardExpansion($event)" id="4" titleText="typefaster" html="Application <span class='underline'>Full-Stack</span>, jeu de type 'typing'. Express, Vue.JS, Mongo ..." image="typefasterLogo.png"
                subTitle="Développement d'un jeu de typing avec <span class='icon'>stockage sur serveur</span>"
                first-block="J’avais cette idée de projet depuis un moment, mais je n’avais pas trouvé la techno que je ne maitrisais pas qui serait intéressante pour ce projet. C'est pourquoi, quand j'ai découvert <span class='icon'>Express</span>, je me suis dit que l'occasion était parfaite pour me lancer. J'ai donc développé un jeu de typing, stockant les scores sur un serveur, embarquant des session et des comptes utilisateurs, des graphiques, etc. Le but était de renforcer mes compétences en JS (à travers le fonctionnement du jeu), mais surtout de me rapprocher du Fullstack en utilisant Express et <span class='icon'>MongoDB</span>."
                second-block="<span class='underline'>Le projet se résume par les points suivants :</span>"
                list-of-skills="Interface dynamique - Gestion des sessions - Gestion des utilisateurs - Stockage des scores - Gestion des graphiques - Gestion des erreurs - Gestion des performances - Mise en relation des données recueillies - Formulaire de connexion avec Hashage"
                third-block="Ce projet était une envie personnelle plus que vraiment utilitaire. J'ai amélioré mes compétences en JS, en Node, en Express, en NOSQL. De façon générale, ce projet a éclairci ma vision du Full-Stack vis-à-vis de la séparation entre Front et Back lors de l'utilisation de Frameworks JS."
          ></Card>
        </div>
      </div>
    </div>
    <hr class="separateur">
    <StackComponent class="appears-bot"></StackComponent>
    <hr class="separateur">
    <div id="hobbies" class="double-container">
        <div class="loisir appears-left">
          <h2><span class="icon">#</span> Côtés loisirs</h2>
          <p class="justify-content">Le <span class="icon">cyclisme</span> sur route, c'est ma passion ! C’est pour moi une super façon de me détendre, de faire le vide et de garder la forme.</p>
        </div>
        <div id="contact" class="contact appears-right">
          <h2><span class="icon">#</span> Me Contacter</h2>
          <p class="justify-content">Je suis actuellement en <span class="icon">recherche d'un premier emploi</span> dans le domaine du développement <span class="icon">Full-Stack</span> ou  <span class="icon">Front-end</span>. Je suis ouvert à toutes les propositions que vous pouvez me présenter aux alentours de <span class="icon">Caen</span> par mail. Je suis intéressé par des opportunités <span class="icon">full remote</span>. Cependant, si vous avez d'autres demandes ou questions, n'hésitez pas à me contacter.</p>
          <div class="mail-message">
            <div class="mail-succes-listener">
              <button class="innerParagraphButton contact" @click="copyToClipboard">Contacter</button>
              <DownloadButton class="innerParagraphButton contact"></DownloadButton>
            </div>
            <p id="email-event" class="event-content"></p>
          </div>
        </div>
    </div>
    <div id="mail-div" v-show="showMailSender === true" class="appears-bot">
      <hr class="separateur">
      <div class="presentation">
        <h2><span class="icon">#</span> M'envoyer un mail</h2>
        <MailSender></MailSender>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
/* CSS */
.container {
  padding: 5em 1em 0 1em;
}

.vertical-align {
  --before-height: 1em;
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.margin-top {
  margin-top: 2em;
}

.vertical-align::before {
  content: '';
  position: absolute;
  top: 0;
  left: -5px;
  width: 2px;
  background-color: var(--text-color);
  height: var(--before-height, 1em);
}

.inner-text-card-align {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  gap: 0;
  position: relative;
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
  color: var(--tile-color);
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
  margin-right: 8%;
}

.separateur {
  margin: 4em 5em;
  border: 1px solid var(--border-color);
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
  font-size: 16px;
  font-style: italic;
  margin-right: 2em;
}

button {
  background-color: var(--button-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 15px;
  font-weight: bold;
}

button:hover {
  background-color: var(--button-color-hover);
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
  color: var(--button-color);
}

.double-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5em;
}

/* type effect */
.typing-effect-container {
  display: flex;
  align-items: center;
}

.typing-effect {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 6px var(--text-color) solid;
  animation: typing 1.5s steps(30, end), blink 0.75s step-end infinite;
  vertical-align: middle;
  line-height: 1.2;
}

.not-icon {
  color: var(--text-color);
}

@keyframes typing {
  from { max-width: 0; }
  to { max-width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

@media (max-width: 1010px) {
  .card-alignement {
    flex-direction: column;
    gap: 1em;
  }

  .double-container {
    flex-direction: column;
    gap: 1em;
  }

  .loisir {
    margin: 0;
  }

  .contact {
    margin: 0;
  }

  .innerParagraphButton {
    margin : 1em;
  }
}

@media (max-width: 1060px) {
  .HeadLine {
    margin-left: 0;
    text-align: center;
    flex-direction: column;
  }

  .typing-effect-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

}

@media (max-width: 768px) {
  .container {
    padding: 1em;
  }

  .profilPic {
    margin: 1em;
  }

  .presentation {
    margin: 0;
  }

  .separateur {
    margin: 1em;
  }

  .innerParagraphButton {
    margin : 1em;
  }

  .mail-succes-listener {
    flex-direction: row;
    align-items: center;
  }

  .mail-message {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .description-split {
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

  .typing-effect {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 6px var(--text-color) solid;
    animation: typing 1.5s steps(30, end), blink 0.75s step-end infinite;
    vertical-align: middle;
  }
}
</style>
