// show item and other on html file
// DOM stuff

function showItem(item) {
    const list = document.querySelector('.list');
    list.appendChild(_appendItem(_getItem(item)));
}

function _appendItem (item) {
    const itemDiv = _createDiv('', 'item');
    itemDiv.appendChild(item.title);
    itemDiv.appendChild(item.des);
    itemDiv.appendChild(item.date);
    itemDiv.appendChild(item.priority);
    itemDiv.appendChild(item.status);
    return itemDiv;
}

function _getItem(item) {
    const title = _createDiv(item.getTitle(), 'title');
    const des = _createDiv(item.getDes(), 'des');
    const date = _createDiv(item.getDate(), 'date');
    const priority = _createDiv(item.getPriorty(), 'priorty');
    const status = _createDiv(item.getStatus(), 'status');
    return {title, des, date, priority, status};
}

function _createDiv(value, className) {
    const target = document.createElement('div');
    target.textContent = value;
    target.classList.add(className);
    return target;
}

export default showItem;