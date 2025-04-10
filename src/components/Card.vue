<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

const props = defineProps({
  titleText: String,
  html: String,
  image: String,
  black: String,
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
  <div class="card" :class="{ 'png-background': isPng }" @click="navigateToRoute">
    <div class="card-header" :style="{ backgroundImage: `url(${imageUrl})` }">
      <p class="short-desc" :class="{ 'black-text': props.black }" v-html="html"></p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;600&display=swap');

.card {
  position: relative;
  width: 280px;
  height: 260px;
  border: 1px solid var(--interactive-component-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;
  border-radius: 20px;
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
  height: 260px;
  font-size: 20px;
  border-radius: 20px;
}

.card {
  transition: width 0.3s 0.2s, height 0.3s 0.2s, box-shadow 0.3s 0.2s;
}

.card:hover {
  cursor: pointer;
  width: 300px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.short-desc {
  position: absolute;
  left: 0;
  bottom: 0;
  line-height: 1.2;
  font-size: 20px;
  display: flex;
  align-items: left;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 0.7em;
  margin-bottom: 0.7em;
  color: white;
}

.black-text {
  color: black;
}

.png-background .card-header {
  background-color: white;
}
</style>
