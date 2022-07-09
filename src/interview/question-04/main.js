const box = document.querySelector('.box');

const initializeEventListeners = () => {
    document.addEventListener('keyup', (e) => {
        let x = Number.parseInt(box.style.getPropertyValue('--x'));
        let y = Number.parseInt(box.style.getPropertyValue('--y'));

        switch (e.code) {
            case 'KeyS':
                y += 100;
                break;
            case 'KeyW':
                y -= 100;
                break;
            case 'KeyA':
                x -= 100;
                break;
            case 'KeyD':
                x += 100;
                break;
        }

        box.style.setProperty('--x', `${x}px`);
        box.style.setProperty('--y', `${y}px`);
    });
};

const main = () => {
    initializeEventListeners();
};

main();
