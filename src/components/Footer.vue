<script setup>

function GithubRedirect() {
  window.location.href="https://github.com/ArthurDesmonts";
}

function redirectToLinkedIn() {
  window.location.href="https://www.linkedin.com/in/arthur-desmonts-53a78b259/";
}

</script>

<template>
  <div class="footer">
    <p>Créé par Arthur Desmonts. 2024</p>
    <p>Repository entièrement consultable sur mon GitHub : </p>
    <img class="logo" src="@/assets/GitHub.png" alt="Github Icon" @click="GithubRedirect()">
    <img class="logo autoScale" src="@/assets/linkedin-Logo.png" alt="LinkedIn Icon" @click="redirectToLinkedIn()">
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

.autoScale {
  width: 50px;
  height: 50px;
}
</style>