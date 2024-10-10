function ThemeBackGroundObserver(div) {
    const observer = new MutationObserver(() => {
        document.querySelectorAll(div).forEach(box => {
            box.style.backgroundColor = document.body.classList.contains('dark-theme') ? 'var(--interactive-component-color)' : 'var(--interactive-component-color)';
        });
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
}

export {ThemeBackGroundObserver};