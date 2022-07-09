const NAMES = ['bijan', 'milad', 'parsa', 'saba', 'saleh'];

const listElement = document.querySelector('ul');

const appendItemsToList = () => {
    NAMES.forEach(name => {
        const item = document.createElement("li");
        item.textContent = name;
        listElement.appendChild(item);
    });
}

const main = () => {
    appendItemsToList();
};

main();
