<script setup>
import {redirectToLinkedIn} from "@/utils/redirectLink.js";
</script>

<template>
  <div class="circle" @click="redirectToLinkedIn">
    <div class="inner-circle"></div>
    <img class="profilPic" src="@/assets/profilPic.png" alt="profilPicture">
  </div>
</template>

<style scoped>
.circle {
  width: 420px;
  height: 420px;
  border-radius: 300px 210px 0 0;
  background-color: var(--profile-background);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15%;
  position: relative;
  overflow: hidden;
  cursor: url("@/assets/linkedin-Logo.png"), auto;
}

.profilPic {
  width: auto;
  height: 400px;
  object-fit: cover;
  border-bottom-left-radius: 210px;
  border-bottom-right-radius: 300px;
  transition: transform 0.4s ease-in-out;
  z-index: 1;
}

.circle:hover .profilPic {
  transform: scale(1.05);
}

.inner-circle {
  width: 100px;
  height: 100px;
  background-color: color(display-p3 1 0.77 0.26);
  border-radius: 50%;
  position: absolute;
  top: 30px;
  right: 15px;
  transition: transform 0.4s ease-in-out;
  z-index: 0;
}

.circle:hover .inner-circle {
  transform: translate(-80px, 50px);
}
</style>