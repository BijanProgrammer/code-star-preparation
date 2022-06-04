const getElementsByClassName = () => {
    const elements = document.getElementsByClassName('item');

    // const firstElement = elements.item(0);
    // const firstElement = elements[0];
    // console.dir(firstElement);

    // const seven = elements.namedItem('seven');
    // console.log(seven);

    const textContents = [];
    for (const element of elements) {
        textContents.push(element.textContent);
    }

    console.log(textContents);
};

const querySelectorAll = () => {
    const elements = document.querySelectorAll('.item');

    const textContents = [];
    elements.forEach((element) => textContents.push(element.textContent));

    console.log(textContents);
};

const main = () => {
    const elements = [...document.getElementsByClassName('item')];
    // const elements = Array.from(document.getElementsByClassName('item'));

    const textContents = elements.map((element) => element.textContent);
    console.log(textContents);
};

main();
