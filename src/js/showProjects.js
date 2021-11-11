import createEle from "./createEle";
import showList from "./createOnScreen";
import newItemControl from './newItemControl';
import toDoList from "./toDoList";

function showProjects(projects) {
    _createHeader(projects);
    projects.getProjects().forEach(list => {
        _displayHeader(list);
        showList(list);
    });
}

function _createHeader(projects) {
    const content = document.querySelector('.content');
    const header = createEle('div', '', 'headerDiv');
    header.appendChild(_createTab(projects));
    content.appendChild(header);
}

function _displayHeader(list) {
    const ele = _createListHeader(list);
    _appendEle(ele);
}

function _createListHeader(list) {
    const projectName = list.getName();
    const addButt = createEle('button', 'add', `add_${projectName}`);
    addButt.classList.add('add');
    addButt.addEventListener('click', () => _clickToAdd(list));
    const newItemDiv = createEle('div', '', `newItem_${projectName}`);
    newItemDiv.classList.add('newItem');
    newItemDiv.classList.add('hide');
    const listDiv = createEle('div', '', `list_${projectName}`);
    listDiv.classList.add('list');
    return {addButt, newItemDiv, listDiv};
}

function _createTab(projects) {
    const tabDiv = createEle('div', '', 'tab');
    projects.getProjects().forEach(list => {
        const name = list.getName();
        const nameButt = createEle('button', `${name}`, `${name}_butt`);
        nameButt.classList.add('project_butt');
        nameButt.addEventListener('click', () => _changeToProject(list));
        tabDiv.appendChild(nameButt);
    })
    tabDiv.appendChild(_createAddProjectButt(projects));
    return tabDiv;
}

function _createAddProjectButt(projects) {
    const addButt = createEle('button', 'new Project', 'add_project');
    addButt.addEventListener('click', () => _addProject(projects));
    return addButt;
}

function _addProject(projects) {
    const proj_prompt = prompt('Project Name:', 'Enter Name');
    const newList = toDoList(proj_prompt);
    projects.addList(newList);
    _clearHeader();
    document.querySelector('.headerDiv').appendChild(_createTab(projects));
}

function _clearHeader() {
    const header = document.querySelector('.headerDiv');
    while (header.firstChild != null)
        header.removeChild(header.firstChild);
}

function _clickToAdd(list) {
    _showForm(list);
    const newItem = newItemControl();
    newItem.storeNewItem(list);
}

function _showForm(list) {
    const projectName = list.getName();
    document.querySelector(`.newItem_${projectName}`).classList.remove('hide');
}

function _appendEle (ele) {
    const content = document.querySelector('.content');
    for (const element in ele) {
        content.append(ele[element]);
    }
}

export default showProjects;