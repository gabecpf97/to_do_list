import createEle from "./createEle";
import toDoItem from "./toDoItem";
import showIt from "./createOnScreen";

const  newItemControl = () => {
    const storeNewItem = (list) => {
        _disableNewButt();
        _displayPrompt();
        _storeItem(list);
    }

    return {storeNewItem};
}

function _disableNewButt() {
    document.querySelector('.add').disabled = true;
}

function _enableNewButt() {
    document.querySelector('.add').disabled = false;
}

function _displayPrompt() {
    const newItemDiv = document.querySelector('.newItem');
    const prompt_div = _appendPrompts(_promptQ());
    const fin_butt = createEle('button', 'Create', 'fin');
    newItemDiv.appendChild(prompt_div);
    newItemDiv.appendChild(fin_butt);
}

const _promptQ = () => {
    const askTitle = "To do item name";
    const askDes = "to do item description";
    const askDate = "item due date";
    const askPriority = "item's priority";

    return {askTitle, askDes, askDate, askPriority};
}

function _appendPrompts(prompts) {
    const prompt_div = createEle('div', '', 'prompts');
    const title_div = _createLableInput(prompts.askTitle, 'in_title');
    const des_div = _createLableInput(prompts.askDes, 'in_des');
    const date_div = _createLableInput(prompts.askDate, 'in_date');
    const priority_div = _createPriorityDiv(prompts.askPriority);
    prompt_div.appendChild(title_div);
    prompt_div.appendChild(des_div);
    prompt_div.appendChild(date_div);
    prompt_div.appendChild(priority_div);
    
    return prompt_div;
}

function _createLableInput(question, className) {
    const q_div = createEle('div', '', 'q_div');
    const label = createEle('label', question, className);
    const answer = createEle('input', '', `${className}_ans`);
    q_div.appendChild(label);
    q_div.appendChild(answer);
    
    return q_div;
}

function _createPriorityDiv(question) {
    const priorityDiv = createEle('div', '', 'priorityDiv');
    const priorityLabel = createEle('label', question, 'in_priority');
    const prioritySelect = createEle('select', '', 'in_priority_ans');
    prioritySelect.name = 'priority';
    const optionTop = _createOption('top');
    const optionMid = _createOption('middle');
    const optionLow = _createOption('low');
    prioritySelect.appendChild(optionTop);
    prioritySelect.appendChild(optionMid);
    prioritySelect.appendChild(optionLow);
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);
    return priorityDiv;
}

function _createOption(priority) {
    const option = createEle('option', priority, `in_options_${priority}`);
    option.value = priority;
    return option;
}

function _storeItem (list) {
    document.querySelector('.fin').addEventListener('click', () => {
        const newItem = _getItem();
        _storeIt(list, newItem);
        _enableNewButt();
    });
}

function _getItem() {
    let input = _promptA();
    _removePrompt();
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

function _removePrompt() {
    const newItemDiv = document.querySelector('.newItem');
    newItemDiv.removeChild(document.querySelector('.prompts'));
    newItemDiv.removeChild(document.querySelector('.fin'));
}

function _storeIt(list, newItem) {
    list.addItem(newItem);
    showIt(list);
}

export default newItemControl;