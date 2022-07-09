const NAMES = ['bijan', 'milad', 'parsa', 'saba', 'saleh'];

const listElement = document.querySelector('ul');

const addNames = () => {
    NAMES.forEach(name => {
        const liElement = document.createElement("li");
        liElement.textContent = name;
        listElement.appendChild(liElement);
    });
}

const main = () => {
    addNames();
};

main();
