<script setup>

function GithubRedirect() {
  window.location.href="https://github.com/ArthurDesmonts";
}
</script>

<template>
  <div class="footer">
    <p>Créé par Arthur Desmonts. 2024</p>
    <p>Repository entièrement consultable sur mon GitHub : </p>
    <img class="logo" src="@/assets/GitHub.png" alt="Github Icon" @click="GithubRedirect()">
  </div>
</template>

<style scoped>

.logo {
  width: 75px;
  height: 50px;
}

.logo:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>