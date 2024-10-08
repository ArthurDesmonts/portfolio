import { ref } from "vue";

export const mailCheck = ref(false);

export const buttonSendStateListener = () => {
    const sendButton = document.querySelector('.send-button');
    if (sendButton) {
        if (mailCheck.value && checkConditions()) {
            sendButton.disabled = false;
            sendButton.style.backgroundColor = 'var(--button-color)';
            sendButton.style.color = 'var(--text-color)';
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

export const checkConditions = () => {
    const condition = document.getElementById('cond');
    if (condition) {
        return condition.checked;
    }
}

export const visibleAlert = ref(false);
export const emited = ref('');
export const kind = ref(true);

export const showAlert = (message, success) => {
    emited.value = message;
    kind.value = success;
    visibleAlert.value = true;
    setTimeout(() => {
        visibleAlert.value = false;
    }, 3000);
};