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
  color: var(--text-color);
  width: 100%;
  min-height: 50px;
  height: auto;
}

.alert-content {
  display: flex;
  justify-content: center;
}

.alert-success {
  background-color: #41b56c;
}

.alert-error {
  background-color: #991a36;
}

.text {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 10px;
  font-family: "Consolas", monospace;
}
</style>