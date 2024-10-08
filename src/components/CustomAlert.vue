<script setup>
import { ref } from 'vue';

const visible = ref(false);
const message = ref('');

const showAlert = (msg) => {
  message.value = msg;
  visible.value = true;
};

const closeAlert = () => {
  visible.value = false;
};

defineExpose({
  visible,
  message,
  showAlert,
  closeAlert,
});
</script>

<template>
  <div v-if="visible" class="custom-alert">
    <div class="alert-content">
      <p>{{ message }}</p>
      <button @click="closeAlert">OK</button>
    </div>
  </div>
</template>

<style scoped>
.custom-alert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #c16ed2;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
</style>