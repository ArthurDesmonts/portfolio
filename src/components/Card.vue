<script setup>
import { ref, onMounted } from 'vue';
import { resizeImage } from '../utils/imageResizer';

const props = defineProps({
  titleText: String,
  html: String,
  image: String,
  subTitle: String,
  firstBlock: String,
  secondBlock: String,
  listOfSkills: String,
  thirdBlock: String
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
  }, 400);
};
</script>

<template>
  <div class="card" :class="{ 'png-background': isPng, 'expanded': showCardContent, 'card': closeCard}">
    <div v-if="showCardContent === false" class="card-header" :style="{ backgroundImage: `url(${imageUrl})` }">
      <h2 v-html="titleText"></h2>
    </div>
    <div class="card-body" :class="themeBackgroundClass">
      <div class="bottom-right">
        <p v-show="showCardContent === false" v-html="html"></p>
        <button v-if="showCardContent === false" class="innerParagraphButton" @click="developCard()">Voir</button>
      </div>
      <div id="expanded-div" :class="['expanded-display-pos', { show: showCardContent, hide: isClosing }]">
        <h2 class="centered" v-html="subTitle"></h2>
        <p class="justify-content" v-html="firstBlock"></p>
        <p class="justify-content" v-html="secondBlock"></p>
        <ul>
          <li v-for="skill in skillsList" :key="skill">{{ skill }}</li>
        </ul>
        <p class="justify-content" v-html="thirdBlock"></p>
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
  width: 245px;
  border: 2px solid #c16ed2;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
}

.card.expanded {
  width: 100%;
  z-index: 10;
}


.card-header {
  padding: 1rem;
  border-bottom: 1px solid #c16ed2;
  text-align: center;
  position: relative;
  background-size: cover;
  background-position: center;
  height: 205px;
}

.card-header h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

.card-body {
  padding: 1rem;
}

.dark-background {
  background-color: #3c424d;
  color: white;
  transition: background-color 0.2s;
}

.light-background {
  background-color: #e1e3e1;
  color: black;
  transition: background-color 0.2s;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.png-background .card-header {
  background-color: white;
}

.innerParagraphButton {
  background-color: #c16ed2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.bottom-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@keyframes expand {
  0% {
    opacity: 0;
    max-height: 0;
  }
  100% {
    opacity: 1;
    max-height: 700px;
  }
}

@keyframes collapse {
  0% {
    opacity: 1;
    max-height: 700px;
  }
  100% {
    opacity: 0;
    max-height: 0;
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
}

.closure-button:hover {
  background-color: #c16ed2;
  transform: scale(1.1);
  box-shadow: #181818 0px 0px 10px;
}
</style>