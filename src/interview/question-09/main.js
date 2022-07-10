const boxes = document.querySelectorAll('.box');

// background color => hsl(hue, 70%, 50%)

const colorChanger = () => {
    let hue = 0;
    const colorChangerInterval = setInterval(() => {
        if (hue === 360) {
            clearInterval(colorChangerInterval);
        }

        boxes.forEach((box) => {
            box.style.backgroundColor = `hsl(${hue} , 70% , 50%)`;
        });

        hue++;
    }, 10);
}


const main = () => {
    colorChanger();
};

main();
