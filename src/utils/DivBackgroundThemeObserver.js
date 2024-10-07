function ThemeBackGroundObserver(div) {
    const observer = new MutationObserver(() => {
        document.querySelectorAll(div).forEach(box => {
            box.style.backgroundColor = document.body.classList.contains('dark-theme') ? '#3c424d' : '#e1e3e1';
        });
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
}

export {ThemeBackGroundObserver};