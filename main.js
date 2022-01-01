const createList = () => {
    const ul = document.createElement('ul');
    ul.className = 'list';
    document.body.append(ul);
};

const addItem = (str) => {
    const ul = document.querySelector('.list');

    const li = document.createElement('li');
    if (str.trim()) {
        li.textContent = str;
        ul.append(li);
    }
};

const deleteItem = () => {
    const lastItem = document.querySelector('.list li:last-child');
    lastItem.remove();
};

const clearList = () => {
    let items = document.querySelectorAll('.list li');
    items.forEach((el) => el.remove());
};
const readyList = () => {
    const item = prompt('Введите наименование пункта списка');
    if (item === null || item === 'exit') return;
    if (item === 'del') {
        deleteItem(item);
        return readyList();
    }
    if (item === 'clear') {
        clearList();
        return readyList();
    }
    addItem(item);
    return readyList();
};

createList();
readyList();
