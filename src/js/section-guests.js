(() => {
    let interval = setInterval(() => {
        const buttons = document.querySelectorAll('.section-guests__accordion-button');
        if(buttons.length) {
            clearInterval(interval);

            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    buttons.forEach((button) => {
                        button.closest('li').classList.remove('opened-accordion')
                    });
                    event.target.closest('li').classList.add('opened-accordion');
                });
            });
        };
    }, 500);
})();