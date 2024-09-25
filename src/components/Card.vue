<script setup>
import {ref, onMounted} from 'vue';
import { resizeImage } from '../utils/imageResizer';

const props = defineProps({
  titleText: String,
  html: String,
  image: String
});

const imageUrl = ref('');
const isPng = ref(false);
const themeBackgroundClass = ref('');

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


});
</script>

<template>
  <div class="card" :class="{ 'png-background': isPng }">
    <div class="card-header" :style="{ backgroundImage: `url(${imageUrl})` }">
      <h2 v-html="titleText"></h2>
    </div>
    <div class="card-body" :class="themeBackgroundClass">
      <p v-html="html"></p>
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
</style>