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
    return itemDiv;
}

function _getItem(item) {
    const title = createEle('div', item.getTitle(), 'title');
    const des = createEle('div', item.getDes(), 'des');
    const date = createEle('div', item.getDate(), 'date');
    const priority = createEle('div', item.getPriorty(), 'priorty');
    const status = createEle('div', item.getStatus(), 'status');
    return {title, des, date, priority, status};
}
function _clearScreen(list_div) {
    while(list_div.firstChild != null)
        list_div.removeChild(list_div.firstChild);
}

export default showList;