import createEle from "./createEle";
import showList from "./createOnScreen";
import newItemControl from './newItemControl';
import toDoList from "./toDoList";
import storeLocally from './storeLocally';

function showProjects(projects) {
    _createHeader(projects);
    projects.getProjects().forEach(list => {
        if (document.querySelector('.listDiv') == null)
            _displayHeader(list, projects);
        showList(list, projects);
    });
}

function _createHeader(projects) {
    const content = document.querySelector('.content');
    const header = createEle('div', '', 'headerDiv');
    header.appendChild(_createTab(projects));
    content.appendChild(header);
}

function _displayHeader(list, projects) {
    const ele = _createListHeader(list, projects);
    _appendEle(ele);
}

function _createListHeader(list, projects) {
    const name = list.getName().replace(' ', '_');
    const addButt = createEle('button', 'add item', `add${name}`);
    addButt.classList.add('add');
    addButt.addEventListener('click', () => _clickToAdd(list, projects));
    const newItemDiv = createEle('div', '', `newItem`);
    newItemDiv.classList.add('hide');
    const listDiv = createEle('div', '', `list`);
    const editProjectButt = createEle('button', 'Change Project Name', 'changePName');
    editProjectButt.addEventListener('click', () => _changePName(list, projects));
    const deleteProject = createEle('button', 'Delete project', 'delPButt');
    deleteProject.addEventListener('click', () => _deleteProject(list, projects));
    return {newItemDiv, listDiv, addButt, editProjectButt, deleteProject};
}

function _createTab(projects) {
    const tabDiv = createEle('div', '', 'tab');
    projects.getProjects().forEach(list => {
        const name = list.getName();
        const nameButt = createEle('button', `${name}`, `project_butt`);
        nameButt.addEventListener('click', () => _changeToProject(list, projects));
        tabDiv.appendChild(nameButt);
    })
    tabDiv.appendChild(_createAddProjectButt(projects));
    return tabDiv;
}

function _changeToProject(list, projects) {
    _clearList();
    _displayHeader(list, projects);
    showList(list, projects);
}

function _clearList() {
    const content = document.querySelector('.content');
    content.removeChild(document.querySelector('.listDiv'));
}

function _createAddProjectButt(projects) {
    const addButt = createEle('button', 'new Project', 'add_project');
    addButt.addEventListener('click', () => _addProject(projects));
    return addButt;
}

function _addProject(projects) {
    const proj_prompt = prompt('Project Name:', 'New_project');
    const newList = toDoList(proj_prompt);
    projects.addList(newList);
    storeLocally().storeProject(projects);
    _clearHeader();
    document.querySelector('.headerDiv').appendChild(_createTab(projects));
}

function _clearHeader() {
    const header = document.querySelector('.headerDiv');
    while (header.firstChild != null)
        header.removeChild(header.firstChild);
}

function _clickToAdd(list, projects) {
    const newItem = newItemControl();
    newItem.storeNewItem(list, projects);
}

function _changePName(list, projects) {
    const newName = prompt('What is the new name of the project?', list.getName());
    list.setName(newName);
    storeLocally().storeProject(projects);
    _clearAll();
    showProjects(projects);
}

function _deleteProject(list, projects) {
    projects.removeList(list.getName());
    storeLocally().storeProject(projects);
    _clearAll();
    showProjects(projects);
}

function _clearAll() {
    const content = document.querySelector('.content');
    while (content.firstChild != null)
        content.removeChild(content.firstChild);
}

function _appendEle (ele) {
    const content = document.querySelector('.content');
    const listDiv = createEle('div', '', 'listDiv');
    for (const element in ele) {
        listDiv.appendChild(ele[element]);
    }
    content.appendChild(listDiv);
}

export default showProjects;