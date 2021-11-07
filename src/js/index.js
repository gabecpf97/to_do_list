import toDoItem from "./toDoItem";
import toDoList from "./toDoList";
import showIt from "./createOnScreen";

(function() {
    const list = toDoList();

    list.addItem(toDoItem('test1', 'testing 1', 'today', 'low'));
    list.addItem(toDoItem('test2', 'testing 2', 'today', 'low'));

    list.getList().forEach(item => {
        showIt(item);
    });

    document.querySelector('.add').addEventListener('click', () => {
        inputControl();
        showIt(inputControl.getItem());
    });
})();