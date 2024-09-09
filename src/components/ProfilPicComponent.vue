<script setup>

</script>

<template>
  <div class="circle">
    <img class="profilPic" src="@/assets/profilPic.png" alt="profilPicture">
  </div>
</template>

<style scoped>
.circle {
  width: 420px;
  height: 420px;
  border-radius: 300px 210px 0 0;
  background-color: #c16ed2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15%;
}

.profilPic {
  width: auto;
  height: 400px;
  object-fit: cover;
  border-bottom-left-radius: 210px;
  border-bottom-right-radius: 300px;
}
</style>