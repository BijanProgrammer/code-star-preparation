const box = document.querySelector('.box');

let x = Number.parseInt(box.style.getPropertyValue('--x'));
let y = Number.parseInt(box.style.getPropertyValue('--y'));



const initializeEventListeners = () => {
    document.addEventListener('keyup', (e) => {
        if (e.code === 'KeyS') {
            y += 100;
            box.style.setProperty('--y', `${y}px`);
        } else if (e.code === 'KeyW') {
            y -= 100;
            box.style.setProperty('--y', `${y}px`);
        } else if (e.code === 'KeyA') {
            x -= 100;
            box.style.setProperty('--x', `${x}px`);
        } else if (e.code === 'KeyD') {
            x += 100;
            box.style.setProperty('--x', `${x}px`);
        }
    });
};

const main = () => {
    initializeEventListeners();
};

main();
