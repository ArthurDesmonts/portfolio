<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

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
  <div class="card" :class="{ 'png-background': isPng }" @click="navigateToRoute">
    <div class="card-header" :style="{ backgroundImage: `url(${imageUrl})` }">
      <p class="short-desc" v-html="html"></p>
    </div>
  </div>
</template>

<style scoped>
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


.card-body {
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
</style>
