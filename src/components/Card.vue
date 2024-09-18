<script setup>

const props = defineProps({
  titleText: String,
  html: String,
  image: String
});


</script>

<template>
  <div class="card" :class="{ 'has-background': image }" :style="image ? { backgroundImage: `url(${image})` } : {}">
    <div class="card-header">
      <h2 v-html="titleText"></h2>
    </div>
    <div class="card-body">
      <p v-html="html"></p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  border: 1px solid #c16ed2;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
}

.card-header {
  padding: 1rem;
  border-bottom: 1px solid #c16ed2;
  text-align: center;
}

.card-body {
  padding: 1rem;
}

card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

</style>