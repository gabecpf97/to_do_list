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
    const name = list.getName().replace(' ', '_');
    const addButt = createEle('button', 'add item', `add${name}`);
    addButt.classList.add('add');
    addButt.addEventListener('click', () => _clickToAdd(list));
    const newItemDiv = createEle('div', '', `newItem`);
    newItemDiv.classList.add('hide');
    const listDiv = createEle('div', '', `list`);
    return {newItemDiv, listDiv, addButt};
}

function _createTab(projects) {
    const tabDiv = createEle('div', '', 'tab');
    projects.getProjects().forEach(list => {
        const name = list.getName();
        const nameButt = createEle('button', `${name}`, `project_butt`);
        nameButt.addEventListener('click', () => _changeToProject(list));
        tabDiv.appendChild(nameButt);
    })
    tabDiv.appendChild(_createAddProjectButt(projects));
    return tabDiv;
}

function _changeToProject(list) {
    _clearList();
    _displayHeader(list);
    showList(list);
}

function _clearList() {
    const content = document.querySelector('.content');
    // content.removeChild(document.querySelector('.add'));
    // content.removeChild(document.querySelector('.newItem'));
    // content.removeChild(document.querySelector('.list'));
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
    const str = JSON.stringify(projects.toString())
    checkJson(str);
    _clearHeader();
    document.querySelector('.headerDiv').appendChild(_createTab(projects));
}

function checkJson(str) {
    const projects = str.substring(1, str.length - 1).split('|');
    console.log(projects);
    const nameitems = projects[0].substring(1, projects[0].length - 1).split(':');
    console.log(nameitems[0]);
    console.log(nameitems[1]);
    const itemArr = [];
    const items = nameitems[1].split('.');
    items.forEach(item => {
        console.log(item.substring(1, item.length - 1));
        itemArr.push()
    })
}

function _clearHeader() {
    const header = document.querySelector('.headerDiv');
    while (header.firstChild != null)
        header.removeChild(header.firstChild);
}

function _clickToAdd(list) {
    const newItem = newItemControl();
    console.log(list.getList());
    newItem.storeNewItem(list);
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