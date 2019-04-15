class List {
    constructor() {
        this.arr = [];
    }

    adiciona() {
        this.arr.push('New To-Do!');
    }

    getArr() {
        return this.arr;
    }
}

class ToDoList extends List {
    constructor() {
        super();
    }
}

var myList = new ToDoList();

myList.adiciona();

console.log(
    myList.getArr()
);