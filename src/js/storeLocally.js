import listControl from "./listControl";

const localProjects = () => {
    function storeProject(projects) {
        localStorage.setItem('toDoProjects', JSON.stringify(projects.toString()));
    }

    function getFromLocal() {
        // let localProjects = localStorage.getItem('toDoProjects');
        // const projects = listControl();
        // _getListFromProject(localProjects);
    }

    return {storeProject, getFromLocal};
}

// function _getListFromProject(str) {
//     return str.substring(1, str.length - 1).split('|');
// }

// function _getItemFromList(str) {
//     const itemArr = [];
//     const name, items = str.substring(1, str.length - 1).split(':');
//     items = items.split('.');
//     items.forEach(item => {

//     });
//     return itemArr;
// }

export default localProjects;