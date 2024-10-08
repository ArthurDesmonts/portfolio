<script setup>

const props = defineProps({
  message: String,
  kind: Boolean,
});

</script>

<template>
  <div :class="['custom-alert', kind ? 'alert-success' : 'alert-error']">
    <div class="alert-content">
      <p class="text" v-html="message"></p>
    </div>
  </div>
</template>

<style scoped>
.custom-alert {
  border-radius: 5px;
  color: white;
  width: 100%;
  min-height: 50px;
  height: auto;
}

.alert-content {
  display: flex;
  justify-content: center;
}

.alert-success {
  background-color: green;
}

.alert-error {
  background-color: red;
}

.text {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 10px;
}
</style>