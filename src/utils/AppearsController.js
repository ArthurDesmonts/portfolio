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

export { appearsTop, appearsBot, appearsLeft, appearsRight };