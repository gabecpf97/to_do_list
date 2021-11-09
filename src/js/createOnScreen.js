// show item and other on html file
// DOM stuff
import createEle from "./createEle";

function showList(list) {
    const list_div = document.querySelector('.list');
    _clearScreen(list_div);
    list.getList().forEach(item => {
        _showItem(list_div, item);
    });
}

function _showItem(list, item) {
    list.appendChild(_appendItem(_getItem(item)));
}

function _appendItem (item) {
    const itemDiv = createEle('div', '', 'item');
    itemDiv.appendChild(item.title);
    itemDiv.appendChild(item.des);
    itemDiv.appendChild(item.date);
    itemDiv.appendChild(item.priority);
    itemDiv.appendChild(item.status);
    itemDiv.appendChild(_createDeleteButt());
    return itemDiv;
}

function _getItem(item) {
    const title = createEle('div', item.getTitle(), 'title');
    const des = createEle('div', item.getDes(), 'des');
    const date = createEle('div', item.getDate(), 'date');
    const priority = createEle('div', item.getPriorty(), 'priorty');
    const status = _createStatusDiv(item);
    return {title, des, date, priority, status};
}

function _clearScreen(list_div) {
    while(list_div.firstChild != null)
        list_div.removeChild(list_div.firstChild);
}

function _createStatusDiv(item) {
    const statusDiv = createEle('div', '', 'status');
    const statusLabel = _createLabel();
    const statusCheck = _createCheck(item);
    statusDiv.appendChild(statusLabel);
    statusDiv.appendChild(statusCheck);
    return statusDiv;
}

function _createLabel() {
    const statusLabel = createEle('label', 'Completed?', 'status_l');
    statusLabel.htmlFor = 'status';
    return statusLabel;
}

function _createCheck(item) {
    const statusCheck = createEle('input', '', 'status_c');
    statusCheck.type = 'checkbox';
    statusCheck.name = 'status';
    if (item.getStatus())
        statusCheck.checked = true;
    statusCheck.addEventListener('change', item.setStatus());
    return statusCheck;
}

function _createDeleteButt() {
    const deleButt = createEle('button', 'Delete', 'delete');
    deleButt.addEventListener('click', e => _removeItem(e));
    return deleButt;
}

function _removeItem(e) {
    const list = document.querySelector('.list');
    list.removeChild(e.target.parentNode);
}

export default showList;