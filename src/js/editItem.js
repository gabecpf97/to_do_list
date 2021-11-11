import showList from "./createOnScreen";
import createPrompt from './createPrompt';

const editItem = () => {
    const editIt = (name, item, list) => {
        _showForm(list.getName());
        createPrompt().createIt(name, list.getName());
        _fillData(item);
        _changeData(item, list);
    }
    return {editIt};
}

function _showForm(name) {
    document.querySelector(`.newItem_${name}`).classList.remove('hide');
}

function _fillData(item) {
    let feilds = _promptA();
    feilds.title.value = item.getTitle();
    feilds.des.value = item.getDes();
    feilds.date.value = item.getDate();
    feilds.priority.value = item.getPriority();
}

const _promptA = () => {
    const title = document.querySelector('.in_title_ans');
    const des = document.querySelector('.in_des_ans');
    const date = document.querySelector('.in_date_ans');
    const priority = document.querySelector('.in_priority_ans');

    return {title, des, date, priority};
}

function _changeData(item, list) {
    document.querySelector('.fin').addEventListener('click', () =>  {
        _storeChanges(item);
        _removePrompt(list.getName());
        if (list.getList() != null)
            showList(list);
    });
}

function _storeChanges(item) {
    let input = _promptA();
    item.setTitle(input.title.value);
    item.setDes(input.des.value);
    item.setDate(input.date.value);
    item.setPriority(input.priority.value);
}

function _removePrompt(name) {
    const newItemDiv = document.querySelector(`.newItem_${name}`);
    newItemDiv.removeChild(document.querySelector(`.prompts_${name}`));
    newItemDiv.classList.add('hide');
}

export default editItem;