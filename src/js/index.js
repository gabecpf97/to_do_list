import toDoItem from "./toDoItem";
import toDoList from "./toDoList";
import showIt from "./createOnScreen";
import newItemControl from "./newItemControl";
import '../style.css'

(function() {
    const list = toDoList();

    list.addItem(toDoItem('test1', 'testing 1', 'today', 'low'));
    list.addItem(toDoItem('test2', 'testing 2', 'today', 'low'));

    showIt(list);

    document.querySelector('.add').addEventListener('click', () => {
        _showForm();
        const newItem = newItemControl();
        newItem.storeNewItem(list);
    });

    function _showForm() {
        document.querySelector('.newItem').classList.remove('hide');
    }
    
})();