import toDoItem from "./toDoItem";
import toDoList from "./toDoList";
import showIt from "./createOnScreen";
import newItemControl from "./newItemControl";
import '../style.css'
import listControl from "./listControl";
import showProjects from "./showProjects";

(function() {
    const list = toDoList('Default');

    list.addItem(toDoItem('test1', 'testing 1', 'today', 'low'));
    list.addItem(toDoItem('test2', 'testing 2', 'today', 'low'));
    
    const projects = listControl();
    projects.addList(list);
    
    showProjects(projects);
})();