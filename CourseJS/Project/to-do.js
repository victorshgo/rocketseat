var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list')) || [];

function render() {
    listElement.innerHTML = '';

    for(todo of todos) {
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('⤫');

        var index = todos.indexOf(todo);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteItem('+ index +')');
        linkElement.appendChild(linkText);

        itemElement.appendChild(itemText);
        itemElement.appendChild(linkElement);

        listElement.appendChild(itemElement);
    }
}

function save() {
    localStorage.setItem('list', JSON.stringify(todos));
}

function createItem() {
    var inputText = inputElement.value;

    todos.push(inputText);
    inputElement.value = '';

    save();
    render();
}

function deleteItem(index) {
    todos.splice(index, 1);

    save();
    render();
}

buttonElement.onclick = createItem;

render();