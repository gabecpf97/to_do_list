import createEle from "./createEle";
import toDoItem from "./toDoItem";

const  newItemControl = () => {
    const showPrompt = () => {
        _displayPrompt();
    }

    const getItem = () => {
        _getItem();
    }

    return {showPrompt, getItem};
}

function _displayPrompt() {
    const content = document.querySelector('.content');
    const prompt_div = _appendPrompts(_promptQ());
    const fin_butt = createEle('button', 'Create', 'fin');
    fin_butt.addEventListener('click', _finClicked());
    content.appendChild(prompt_div);
    content.appendChild(fin_butt);
}

const _promptQ = () => {
    const askTitle = "";
    const askDes = "";
    const askDate = "";
    const askPriority = "";
    const askStatus = "";

    return {askTitle, askDes, askDate, askPriority, askStatus};
}

function _appendPrompts(prompts) {
    const prompt_div = createEle('div', '', 'prompts');
    const title_div = _createLableInput(prompts.askTitle, 'in_title');
    const des_div = _createLableInput(prompts.askDes, 'in_des');
    const date_div = _createLableInput(prompts.askDate, 'in_date');
    const priority_div = _createLableInput(prompts.askPriority, 'in_priority');
    const status_div = _createLableInput(prompts.askStatus, 'in_status');
    prompt_div.appendChild(title_div);
    prompt_div.appendChild(des_div);
    prompt_div.appendChild(date_div);
    prompt_div.appendChild(priority_div);
    prompt_div.appendChild(status_div);
    
    return prompt_div;
}

function _finClicked() {
    const input = _promptA();
    _removePrompt;
    // how to store it w/o global
}

function _createLableInput(question, className) {
    const q_div = createEle('div', '', 'q_div');
    const label = createEle('label', question, className);
    const answer = createEle('input', '', `${className}_ans`);
    q_div.appendChild(label);
    q_div.appendChild(answer);
    
    return q_div;
}

const _promptA = () => {
    const title = document.querySelector('.in_title_ans').value;
    const des = document.querySelector('.in_des_ans').value;
    const date = document.querySelector('.in_date_ans').value;
    const priority = document.querySelector('.in_priority_ans').value;
    const status = document.querySelector('.in_status_ans').value;

    return {title, des, date, priority, status};
}

function _removePrompt() {
    const content = document.querySelector('.content');
    content.removeChild(document.querySelector('.prompts'));
    content.removeChild(document.querySelector('.fin'));
}

function _getItem() {
    
}

export default newItemControl;