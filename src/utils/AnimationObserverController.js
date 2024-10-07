function appearsTop() {
    const appearsObserverTop = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appears-top');
            } else {
                entry.target.classList.remove('appears-top');
            }
        });
    });

    document.querySelectorAll('.appears-top').forEach(el => {
        appearsObserverTop.observe(el);
    });
}

function appearsBot() {
    const appearsObserverBot = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appears-bot');
            } else {
                entry.target.classList.remove('appears-bot');
            }
        });
    });

    document.querySelectorAll('.appears-bot').forEach(el => {
        appearsObserverBot.observe(el);
    });
}

function appearsLeft() {
    const appearsObserverLeft = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appears-left');
            } else {
                entry.target.classList.remove('appears-left');
            }
        });
    });

    document.querySelectorAll('.appears-left').forEach(el => {
        appearsObserverLeft.observe(el);
    });
}

function appearsRight() {
    const appearsObserverRight = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appears-right');
            } else {
                entry.target.classList.remove('appears-right');
            }
        });
    });

    document.querySelectorAll('.appears-right').forEach(el => {
        appearsObserverRight.observe(el);
    });
}

function appearsScaleIncrease() {
    const appearsObserverScaleIncrease = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appears-scale-increase');
            } else {
                entry.target.classList.remove('appears-scale-increase');
            }
        });
    });

    document.querySelectorAll('.appears-scale-increase').forEach(el => {
        appearsObserverScaleIncrease.observe(el);
    });
}

function typingEffect() {
    const typingEffectElement = document.querySelector('.typing-effect');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetTypingAnimation(entry.target);
            }
        });
    });

    observer.observe(typingEffectElement);
}

//for re-casting typing animation
const resetTypingAnimation = (element) => {
    element.style.animation = 'none';
    element.offsetHeight; // trigger reflow
    element.style.animation = '';
};


//global controller for all appears
function globalAppearsController() {
    appearsTop();
    appearsBot();
    appearsLeft();
    appearsRight();
    appearsScaleIncrease();
}

export { globalAppearsController, typingEffect };