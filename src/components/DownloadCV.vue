<script setup>

const downloadFile = () => {
  const link = document.createElement('a');
  link.href = new URL('@/assets/CV_ArthurDesmonts.pdf', import.meta.url).href;
  link.download = 'CV_ArthurDesmonts.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

</script>

<template>
  <button @click="downloadFile" class="download-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v5h3l-4 4-4-4h3v-5z"/>
    </svg>
  </button>
</template>

<style scoped>
.download-button {
  background-color: #c16ed2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.download-button:hover {
  background-color: #a44cb7;
}
</style>