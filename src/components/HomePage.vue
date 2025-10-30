<script setup>
import {onMounted, ref, watch} from "vue";
import ProfilPicComponent from "@/components/ProfilPicComponent.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
import DownloadButton from "@/components/DownloadCV.vue";
import StackComponent from "@/components/StackComponent.vue";
import { globalAppearsController, typingEffect } from "@/utils/AnimationObserverController.js";
import MailSender from "@/components/MailSender.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showMailSender = ref(false);

const copyToClipboard = () => {
    showMailSender.value = !showMailSender.value;
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
        <p class="justify-content descriptionBox no-after appears-left">Moi c'est Arthur.

Je suis développeur <span class="icon">Full-Stack</span>, passionné par la création d’expériences numériques à la fois utiles et élégantes. Diplômé d’un BUT Informatique à l’université de Caen, j’y ai acquis de solides bases en <span class="icon">développement Web</span>, en <span class="icon">bases de données</span> et en <span class="icon">développement applicatif</span>.

J’ai ensuite approfondi ces compétences au cours d’<span class="icon">une année d’alternance</span> au sein d’une équipe de développeurs mobiles. Cette expérience m’a permis de travailler sur des applications <span class="icon">Android</span> et <span class="icon">iOS</span>, tout en contribuant à un ambitieux projet Web en <span class="icon">Vue.js</span>.
</p>

<p class="justify-content descriptionBox no-before appears-right">
Au fil de cette année, j’ai exploré diverses librairies d’<span class="icon">imagerie</span> telles qu’<span class="icon">OpenCV</span>, <span class="icon">MLKit</span> et <span class="icon">Apple Vision</span>. Ces outils m’ont conduit à concevoir un projet d’<span class="icon">OCR</span> (reconnaissance optique de caractères), où j’ai développé plusieurs algorithmes de détection et de reconnaissance.

Ce qui me motive dans le développement, c’est la recherche de solutions ingénieuses à des problèmes concrets. Je suis <span class="icon">curieux</span>, <span class="icon">enthousiaste</span> et j’aime collaborer avec des personnes animées par la même passion du code. Travailler en autonomie ne me fait pas peur, mais j’accorde toujours une grande valeur aux échanges et aux retours constructifs.
</p>
      </div>
    </div>
    <hr id="project" class="separateur">
    <div id="projects-div" class="presentation appears-top">
      <h2><span class="icon">#</span> Mes projets récents</h2>
      <div class="card-alignement">
        <div class="inner-text-card-align">
          <Card id="1" titleText="imagerie" html="Scanner Automatique" image="openCv.png" black="true" route="/portfolio/opencv"></Card>
        </div>
        <div class="inner-text-card-align">
          <Card id="2" titleText="ocr" html="Reconnaissance optique (OCR)" image="mlkit.png" black="true" route="/portfolio/mlkit"></Card>
        </div>
        <div class="inner-text-card-align">
          <Card id="3" titleText="vue.js" html="Création d'une SPA" image="Vue.js.png" black="true" route="/portfolio/vuejs"></Card>
        </div>
      </div>
      <div class="card-alignement margin-top">
        <div class="inner-text-card-align">
          <Card id="4" titleText="typefaster" html="Typing Game" image="typefasterLogo.png" route="/portfolio/typefaster"></Card>
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
          <p class="justify-content">Je suis actuellement à la <span class="icon">recherche d'un emploi</span> dans le domaine du développement <span class="icon">Full-Stack</span>. Je suis ouvert à toutes les propositions que vous pouvez me présenter par mail. Je suis intéressé par des opportunités <span class="icon">full remote</span>. Cependant, si vous avez d'autres demandes ou questions, n'hésitez pas à me contacter.</p>
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
