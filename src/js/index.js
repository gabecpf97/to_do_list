import toDoList from "./toDoList";
import '../style.css'
import listControl from "./listControl";
import showProjects from "./showProjects";
import storeLocally from "./storeLocally";

(function() {
    let projects = storeLocally().getFromLocal();
    if (projects == undefined) {
        const list = toDoList('Default');
        projects = listControl();
        projects.addList(list);
    }
    
    showProjects(projects);
})();