<script setup>
import {ref, onMounted, computed} from 'vue';
import { resizeImage } from '../utils/imageResizer';

const props = defineProps({
  titleText: String,
  html: String,
  image: String,
  subTitle: String,
  firstBlock: String,
  secondBlock: String,
  listOfSkills: String,
  thirdBlock: String,
  gitHubLink: String,
  link: String
});

const emitExpand = defineEmits(['expandCard']);

const imageUrl = ref('');
const isPng = ref(false);
const themeBackgroundClass = ref('');
const isClosing = ref(false);
const skillsList = ref([]);

onMounted(async () => {
  try {
    const imagePath = new URL(`../assets/${props.image}`, import.meta.url).href;
    imageUrl.value = await resizeImage(imagePath);
    // Check if a white background is required for eye comfort
    if (props.image.toLowerCase().endsWith('.png') || props.image.toLowerCase().endsWith('.svg')) {
      isPng.value = true;
    }
  } catch (error) {
    console.error('Error resizing image:', error);
  }

  //Change the class of the card depending on the theme selected
  themeBackgroundClass.value = document.body.classList.contains('dark-theme') ? 'dark-background' : 'light-background';

  const observer = new MutationObserver(() => {
    themeBackgroundClass.value = document.body.classList.contains('dark-theme') ? 'dark-background' : 'light-background';
  });

  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // Transform listOfSkills into an array
  if (props.listOfSkills) {
    skillsList.value = props.listOfSkills.split(' - ').map(skill => skill.trim());
  }
});

//Card Content
const showCardContent = ref(false);

const developCard = () => {
  showCardContent.value = true;
  isClosing.value = false;
  emitExpand('expandCard', props.titleText);
};

const closeCard = () => {
  isClosing.value = true;
  setTimeout(() => {
    showCardContent.value = false;
    emitExpand('expandCard', "reset");
    isClosing.value = false;
    //for phone collapse
    if (window.innerWidth <= 768) {
      const cardElement = document.getElementById("card");
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }
  }, 400);
};

const displayLinks = props.gitHubLink && props.link;

const colorOfVisibility = computed(() => {
  return displayLinks ? 'var(--text-color)' : 'red';
});
</script>

<template>
  <div class="card" :class="{ 'png-background': isPng, 'expanded': showCardContent, 'card': closeCard}">
    <div v-if="showCardContent === false" class="card-header" :style="{ backgroundImage: `url(${imageUrl})` }">
      <h2 class="title" v-html="titleText"></h2>
      <div class="visibility-svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :fill="colorOfVisibility">
          <path d="M12 4.5C7.305 4.5 3.135 7.305 1.5 12c1.635 4.695 5.805 7.5 10.5 7.5s8.865-2.805 10.5-7.5c-1.635-4.695-5.805-7.5-10.5-7.5zm0 13c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z"/>
        </svg>
      </div>
    </div>
    <div id="card" class="card-body" :class="themeBackgroundClass">
      <div class="bottom-right">
        <p class="short-desc" v-show="showCardContent === false" v-html="html"></p>
        <button id="developButton" v-if="showCardContent === false" class="innerParagraphButton" @click="developCard()">Voir</button>
      </div>
      <div id="expanded-div" :class="['expanded-display-pos', { show: showCardContent, hide: isClosing }]">
        <h2 class="centered" v-html="subTitle"></h2>
        <p class="justify-content" v-html="firstBlock"></p>
        <p class="justify-content" v-html="secondBlock"></p>
        <ul>
          <li v-for="skill in skillsList" :key="skill">{{ skill }}</li>
        </ul>
        <p class="justify-content" v-html="thirdBlock"></p>
        <div v-if="displayLinks" class="link-button">
          <a :href="gitHubLink" target="_blank" class="innerParagraphIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.54.115-3.205 0 0 1.005-.32 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.55 3.285-1.23 3.285-1.23.655 1.665.245 2.9.12 3.205.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22v3.285c0 .32.215.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a :href="link" target="_blank" class="innerParagraphImage">
            <img :src="imageUrl" alt="Typefaster Logo" width="24" height="24">
          </a>
        </div>
        <div class="closure-button-container">
          <button class="innerParagraphButton closure-button" @click="closeCard">
            <span class="material-icons">arrow_upward</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 245px;
  border: 4px solid var(--interactive-component-color);
  border-radius: 5px;
  box-shadow: 0 2px 4px var(--shadow);
  background-size: cover;
  background-position: center;
}

.title {
  display: none;
}

.card.expanded {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.card-header {
  padding: 1rem;
  border-bottom: 0;
  text-align: center;
  position: relative;
  background-size: cover;
  background-position: center;
  height: 205px;
  font-size: 20px;
}

.card-header h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;}

.card-body {
  padding: 1rem;
}

.short-desc {
  line-height: 1.2;
  font-size: 16px;
}

.dark-background {
  background-color: var(--interactive-component-color);
  color: var(--text-color);
  transition: background-color 0.2s;
}

.light-background {
  background-color: var(--interactive-component-color);
  color: var(--text-color);
  transition: background-color 0.2s;
}

.card:hover {
  box-shadow: 0 0 20px 4px rgba(var(--text-color-rgb), 0.5);
  transition: 0.4s ease-in-out;
}

.card.expanded:hover {
  box-shadow: none;
}

.png-background .card-header {
  background-color: white;
}

.innerParagraphButton {
  background-color:  var(--button-color);
  color: var(--button-text-color);
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1em;
  font-weight: bold;
}

.innerParagraphButton:hover {
  background-color: var(--button-color-hover);
}

.bottom-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.link-button {
  display: flex;
  flex-direction: row;
  gap : 2em;
  margin-top: 1em;
  margin-left: auto;
  padding-right: 1em;
}

.innerParagraphIcon {
  fill: var(--text-color);
}

.innerParagraphImage {
  width: 24px;
  height: 24px;
}

.visibility-svg {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
}

@keyframes expand {
  0% {
    opacity: 0;
    max-height: 250px;
  }
  100% {
    opacity: 1;
    max-height: 3000px;
    height: 100%;
  }
}

@keyframes collapse {
  0% {
    opacity: 1;
    max-height: 700px;
  }
  100% {
    opacity: 0;
    max-height: 250px;
  }
}

.expanded-display-pos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.expanded-display-pos.show {
  animation: expand 0.8s ease-in-out forwards;
}

.expanded-display-pos.hide {
  animation: collapse 0.4s ease-in-out forwards;
}

/* expand content classes */
.justify-content {
  margin-top: 0;
  text-align: justify;
  padding: 0.5em;
  font-size: 16px;
  position: relative;
}

.centered {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.closure-button {
  width: 30px;
  flex-direction: row;
  align-items: center;
}

.closure-button-container {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.closure-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--button-text-color);
}

.closure-button:hover {
  background-color: var(--button-color-hover);
  transform: scale(1.1);
  box-shadow: #181818 0px 0px 10px;
}

@media (max-width: 768px) {
  @keyframes expand {
    0% {
      opacity: 0;
      max-height: 0;
    }
    100% {
      opacity: 1;
      max-height: 1500px;
    }
  }

  @keyframes collapse {
    0% {
      opacity: 1;
      max-height: 1500px;
    }
    100% {
      opacity: 0;
      max-height: 0;
    }
  }
}
</style>