import { ref } from "vue";

export const mailCheck = ref(false);

export const buttonSendStateListener = () => {
    const sendButton = document.querySelector('.send-button');
    if (sendButton) {
        if (mailCheck.value) {
            sendButton.disabled = false;
            sendButton.style.backgroundColor = '#c16ed2';
            sendButton.style.color = '#3c424d';
        } else {
            sendButton.disabled = true;
            sendButton.style.backgroundColor = 'gray';
            sendButton.style.color = 'var(--background-color)';
        }
    }
};

export const isMailAdress = () => {
    const mail = document.querySelector('.extern-mail');
    if (mail) {
        const mailValue = mail.value;
        const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!mailRegex.test(mailValue)) {
            mail.style.border = '2px solid red';
            mailCheck.value = false;
            buttonSendStateListener();
        } else {
            mail.style.border = 'none';
            mailCheck.value = true;
            buttonSendStateListener();
        }
    }
};