<script setup>
import {onMounted, ref} from "vue";
import {ThemeBackGroundObserver} from "@/utils/DivBackgroundThemeObserver";
import { buttonSendStateListener, isMailAdress, sendMail, mailCheck } from "@/utils/mailUtils";

const adjustTextareaHeight = () => {
  const textarea = document.getElementById('mailContent');
  if (textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
};

onMounted(() => {
  ThemeBackGroundObserver('.mail-box-component');
  buttonSendStateListener();
});

</script>

<template>
  <div class="mail-box-component">
    <div class="info-box">
      <div class="ID-part">
        <input class="name" type="text" placeholder="Nom" />
        <input class="firstname" type="text" placeholder="Prénom" />
      </div>
        <input class="extern-mail" type="text" placeholder="Votre e-mail" @input="isMailAdress"/>
    </div>
    <hr class="soft-edge" />
    <div class="main-corps">
      <input class="subject" type="text" placeholder="Sujet" />
      <textarea id="mailContent" class="content" placeholder="Contenu" @input="adjustTextareaHeight"></textarea>
    </div>
    <div class="button-position">
      <button class="send-button" :disabled="!mailCheck" @click="sendMail">Envoyer</button>
    </div>
  </div>
</template>

<style scoped>
.mail-box-component {
  background-color: #3c424d;
  border-radius: 10px;
  margin-top: 1em;
}

.info-box {
  padding: 20px;
}

.main-corps {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.ID-part {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

.name, .firstname {
  width: 48%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: "Consolas", monospace;
  font-size: 1rem;
}

.extern-mail {
  width: 48%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: "Consolas", monospace;
  font-size: 1rem;
}

.soft-edge {
  border: 0;
  border-top: 1px solid var(--background-color);
  margin-left: 20px;
  margin-right: 20px;
}

.subject {
  width: 50%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: "Consolas", monospace;
  font-size: 1rem;
}

.content {
  width: 100%;
  min-height: 200px;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: "Consolas", monospace;
  font-size: 1rem;
  overflow: hidden;
  resize: none;
}

button {
  width: 20%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: gray;
  color: var(--background-color);
  font-weight: bold;
  cursor: pointer;
}

.button-position {
  display: flex;
  justify-content: end;
  padding: 20px;
}
</style>