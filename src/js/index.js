import toDoItem from "./toDoItem";
import toDoList from "./toDoList";

(function() {
    let list = toDoList();

    let a = toDoItem('testing', 'sth abt this', 'testing date', 'top');
    let b = toDoItem('toRemove', 'waiting', 'removingDate', 'mid');

    list.addItem(a);
    list.addItem(b);
    console.log(list.showList());
    list.removeItem(b);
    console.log(list.showList());
})();