// show item and other on html file
// DOM stuff
import createEle from "./createEle";
import editItem from "./editItem";

function showList(list) {
    const list_div = document.querySelector('.list');
    _clearScreen(list_div);
    for (let i = 0; i < list.getList().length; i++) {
        _showItem(list_div, list, list.getList()[i], i);
    }
}

function _showItem(list_div, list, item, i) {
    list_div.appendChild(_appendItem(list, _getItem(item), item, i));
}

function _appendItem (list, item_div, item, i) {
    const itemDiv = createEle('div', '', 'item');
    itemDiv.appendChild(_createBasicDiv(list, item_div, item, i));
    itemDiv.appendChild(_createDes(item_div.des));
    return itemDiv;
}

function _createBasicDiv(list, item_div, item, i) {
    const basicDiv = createEle('div', '', 'basic');
    basicDiv.appendChild(item_div.status);
    basicDiv.appendChild(item_div.title);
    basicDiv.appendChild(item_div.date);
    basicDiv.appendChild(item_div.priority);
    basicDiv.appendChild(_createEditButt(item, list));
    basicDiv.appendChild(_createDeleteButt(list, i));
    basicDiv.appendChild(_createExpandButt(item_div.des));
    return basicDiv;
}

function _getItem(item) {
    const title = createEle('div', item.getTitle(), 'title');
    const des = createEle('div', item.getDes(), 'des');
    const date = createEle('div', item.getDate(), 'date');
    const priority = createEle('div', item.getPriority(), 'priority');
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
    // statusDiv.appendChild(statusLabel);
    statusDiv.appendChild(statusCheck);
    return statusDiv;
}

function _createLabel() {
    const statusLabel = createEle('label', 'Completed', 'status_l');
    statusLabel.htmlFor = 'status';
    return statusLabel;
}

function _createCheck(item) {
    const statusCheck = createEle('input', '', 'status_c');
    statusCheck.type = 'checkbox';
    statusCheck.name = 'status';
    if (item.getStatus())
        statusCheck.checked = true;
    statusCheck.addEventListener('change', () => {
        item.setStatus();
    });
    return statusCheck;
}

function _createDeleteButt(list, i) {
    const deleButt = createEle('button', 'Delete', 'delete');
    deleButt.addEventListener('click', e => _deleteEntry(list, i));
    return deleButt;
}

function _deleteEntry(list, i) {
    _removeItem(list, i);
    showList(list);
}

function _removeItem(list, i) {
    const list_div = document.querySelector('.list');
    while (list_div.firstChild != null) 
        list_div.removeChild(list_div.firstChild);
    list.removeItem(i);
}

function _createEditButt(item, list) {
    const editButt = createEle('button', 'edit', 'edit');
    editButt.addEventListener('click', () => editItem().editIt('edit', item, list));
    return editButt;
}

function _createExpandButt(des) {
    const expandButt = createEle('button', 'expand', 'expand');
    expandButt.addEventListener('click', () => _showDes(expandButt, des.parentNode));
    return expandButt;
}

function _showDes(expandButt, des_container) {
    if (des_container.classList[1] == undefined) {
        des_container.classList.add('hide');
        expandButt.textContent = 'expand';
    } else {
        des_container.classList.remove('hide');
        expandButt.textContent = 'hide';
    }
}

function _createDes(desDiv) {
    const des_container = createEle('div', '', 'des_div');
    des_container.classList.add('hide');
    des_container.appendChild(desDiv);
    return des_container;
}

export default showList;