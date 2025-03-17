<script setup>
import { ref } from 'vue';
import { defineProps, onMounted } from 'vue';

const props = defineProps({
  titleText: String,
  html: String,
  image: String,
  route: String
});

const imageUrl = ref('');
const isPng = ref(false);

onMounted(async () => {
  try {
    const imagePath = new URL(`../assets/${props.image}`, import.meta.url).href;
    imageUrl.value = imagePath;
    if (props.image.toLowerCase().endsWith('.png') || props.image.toLowerCase().endsWith('.svg')) {
      isPng.value = true;
    }
  } catch (error) {
    console.error('Error loading image:', error);
  }
});

const navigateToRoute = () => {
  window.location.href = props.route;
};
</script>

<template>
  <div class="card" :class="{ 'png-background': isPng }">
    <div class="card-header" :style="{ backgroundImage: `url(${imageUrl})` }">
      <h2 class="title" v-html="titleText"></h2>
    </div>
    <div class="card-body">
      <p class="short-desc" v-html="html"></p>
      <div class="bottom-right">
        <button class="innerParagraphButton" @click="navigateToRoute">Voir</button>
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
  color: white;
}

.card-body {
  padding: 1rem;
}

.short-desc {
  line-height: 1.2;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
}

.png-background .card-header {
  background-color: white;
}

.innerParagraphButton {
  background-color: var(--button-color);
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
</style>
