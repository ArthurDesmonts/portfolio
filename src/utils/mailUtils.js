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

export const sendMail = () => {
    const name = document.querySelector('.name');
    const firstname = document.querySelector('.firstname');
    const mail = document.querySelector('.extern-mail');
    const subject = document.querySelector('.subject');
    const content = document.querySelector('.content');

    if (mailCheck.value) {
        console.log('Nom :', name.value);
        console.log('Prénom :', firstname.value);
        console.log('E-mail :', mail.value);
        console.log('Sujet :', subject.value);
        console.log('Contenu :', content.value);
    } else {
        console.log('Veuillez renseigner un e-mail valide');
    }
};