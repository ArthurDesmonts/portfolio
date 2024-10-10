function ThemeBackGroundObserver(div) {
    const observer = new MutationObserver(() => {
        document.querySelectorAll(div).forEach(box => {
            box.style.backgroundColor = document.body.classList.contains('dark-theme') ? 'var(--interactive-component-color)' : '#a8b2bd';
        });
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
}

export {ThemeBackGroundObserver};