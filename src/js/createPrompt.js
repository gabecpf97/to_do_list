import createEle from "./createEle";

const createPrompt = () => {
    const createIt = (name, listName) => {
        _displayPrompt(name, listName);
    }

    return {createIt};
}

function _displayPrompt(name, listName) {
    const elements = _createPromptEle(name, listName);
    elements.prompt_div.appendChild(elements.butt_div);
    elements.newItemDiv.appendChild(elements.prompt_div);
}

function _createPromptEle(name, listName) {
    const newItemDiv = document.querySelector(`.newItem_${listName}`);
    const prompt_div = _appendPrompts(_promptQ(), listName);
    const fin_butt = createEle('button', name, 'fin');
    const cancel_butt = createEle('button', 'Cancel', 'cancel');
    const butt_div = createEle('div', '', 'butt_div');
    butt_div.appendChild(fin_butt);
    butt_div.appendChild(cancel_butt);
    _clickToCancel(cancel_butt, listName);
    _clickedOutside(listName);
    return {newItemDiv, prompt_div, butt_div};
}

const _promptQ = () => {
    const askTitle = "To do item name";
    const askDes = "to do item description";
    const askDate = "item due date";
    const askPriority = "item's priority";

    return {askTitle, askDes, askDate, askPriority};
}

function _appendPrompts(prompts, name) {
    const prompt_div = createEle('div', '', `prompts_${name}`);
    prompt_div.classList.add('prompts');
    const title_div = _createLableInput(prompts.askTitle, 'input', 'in_title');
    const des_div = _createLableInput(prompts.askDes, 'textarea', 'in_des');
    const date_div = _createLableInput(prompts.askDate, 'input', 'in_date');
    const priority_div = _createPriorityDiv(prompts.askPriority);
    prompt_div.appendChild(title_div);
    prompt_div.appendChild(des_div);
    prompt_div.appendChild(date_div);
    prompt_div.appendChild(priority_div);
    
    return prompt_div;
}

function _createLableInput(question, type, className) {
    const q_div = createEle('div', '', 'q_div');
    const label = createEle('label', question, 'in');
    const answer = createEle(type, '', `${className}_ans`);
    q_div.appendChild(label);
    q_div.appendChild(answer);
    
    return q_div;
}

function _createPriorityDiv(question) {
    const priorityDiv = createEle('div', '', 'q_div');
    const priorityLabel = createEle('label', question, 'in');
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

function _clickToCancel(butt, listName) {
    butt.addEventListener('click', () => _removePrompt(listName), {once: true});
}

function _clickedOutside(listName) {
    const newItem = document.querySelector(`.newItem_${listName}`);
    newItem.addEventListener('click', (e) => {
        if (e.currentTarget == e.target)
            _removePrompt(listName);
    }, {once: true});

}

function _removePrompt(listName) {
    const newItemDiv = document.querySelector(`.newItem_${listName}`);
    newItemDiv.removeChild(document.querySelector(`.prompts_${listName}`));
    newItemDiv.classList.add('hide');
    _enableNewButt(listName);
}

function _enableNewButt(listName) {
    document.querySelector(`.add_${listName}`).disabled = false;
}


export default createPrompt;