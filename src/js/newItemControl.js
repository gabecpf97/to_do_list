import toDoItem from "./toDoItem";
import showIt from "./createOnScreen";
import createPrompt from "./createPrompt";

const  newItemControl = () => {
    const storeNewItem = (list) => {
        _disableNewButt(list.getName());
        createPrompt().createIt('add', list.getName());
        _storeItem(list);
    }

    return {storeNewItem};
}

function _disableNewButt(name) {
    document.querySelector(`.add_${name}`).disabled = true;
}

function _enableNewButt(name) {
    document.querySelector(`.add_${name}`).disabled = false;
}

function _storeItem (list) {
    document.querySelector('.fin').addEventListener('click', () => {
        const newItem = _getItem(list.getName());
        _storeIt(list, newItem);
    });
}

function _getItem(name) {
    let input = _promptA();
    _removePrompt(name);
    return inputToItem(input);
}

const _promptA = () => {
    const title = document.querySelector('.in_title_ans').value;
    const des = document.querySelector('.in_des_ans').value;
    const date = document.querySelector('.in_date_ans').value;
    const priority = document.querySelector('.in_priority_ans').value;

    return {title, des, date, priority};
}

function inputToItem(input) {
    return toDoItem(input.title, input.des, input.date, input.priority);
}

function _removePrompt(name) {
    const newItemDiv = document.querySelector('.newItem');
    newItemDiv.removeChild(document.querySelector('.prompts'));
    newItemDiv.classList.add('hide');
    _enableNewButt(name);
}

function _storeIt(list, newItem) {
    list.addItem(newItem);
    showIt(list);
}

export default newItemControl;