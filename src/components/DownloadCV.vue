<script setup>

const downloadFile = () => {
  const link = document.createElement('a');
  link.href = new URL('@/assets/Arthur Desmonts.pdf', import.meta.url).href;
  link.download = 'CV Arthur Desmonts.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

</script>

<template>
  <button @click="downloadFile" class="download-button">
    <span>Mon CV | </span>
    <span class="material-icons icon-style">download</span>
  </button>
</template>

<style scoped>
.icon-style {
  font-size: 18px;
  vertical-align: middle;
  margin-left: 8px;
}

span {
  font-weight: bold;
}
</style>