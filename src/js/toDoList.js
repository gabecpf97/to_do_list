// object that store all item

const toDoList = (name) => {
    let myName = name;
    let items = [];
    let midIndex = items.length;
    let lowIndex = items.length;

    const getName = () => {
        return myName;
    }

    const setName = (newName) => {
        myName = newName;
    }

    const getList = () => {
        return items;
    }

    const addItem = (newItem) => {
        const pri = newItem.getPriority();
        _placeItemByPriority(pri, newItem);
    }

    const removeItem = (target) => {
        _updateIndex(items[target].getPriority());
        items.splice(target, 1);
    }

    const removeAll = () => {
        items = [];
    }

    const showList = () => {
        let result = "";
        items.forEach(item => {
            result += item.toString() + '\n';
        });
        return result;
    }

    function _placeItemByPriority(pri, item) {
        switch (pri) {
            case 'top':
                items.splice(midIndex, 0, item);
                midIndex += 1;
                lowIndex += 1;
                break;
    
            case 'middle':
                items.splice(lowIndex, 0, item);
                lowIndex += 1;
                break;
    
            case 'low':
                items.splice(items.length, 0, item);
                break;
        }
    }

    function _updateIndex(pri) {
        switch (pri) {
            case 'top':
                midIndex -= 1;
                lowIndex -= 1;
                break;

            case 'middle':
                lowIndex -= 1;
                break;
        }
    }

    function toString() {
        let listString = `${myName}:`;
        items.forEach(item => {
            listString += '[' + item.toString() + ']';
            listString += '.';
        });
        listString = listString.substring(0, listString.length - 1);
        return listString;
    }

    return {getName, setName, getList, addItem, removeItem, removeAll, 
                showList, toString};
};

export default toDoList;