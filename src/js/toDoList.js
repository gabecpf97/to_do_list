// object that store all item

const toDoList = () => {
    let items = [];

    const addItem = (newItem) => {
        items.push(newItem);
    }

    const removeItem = (target) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].getTitle() == target.getTitle()) {
                items.splice(i, 1);
            }
        }
    }

    const showList = () => {
        let result = "";
        items.forEach(item => {
            result += item.toString() + '\n';
        });
        return result;
    }

    return {addItem, removeItem, showList};
};

export default toDoList;