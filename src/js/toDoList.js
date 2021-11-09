// object that store all item

const toDoList = () => {
    let items = [];

    const getList = () => {
        return items;
    }

    const addItem = (newItem) => {
        items.push(newItem);
    }

    const removeItem = (target) => {
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

    return {getList, addItem, removeItem, removeAll, showList};
};

export default toDoList;