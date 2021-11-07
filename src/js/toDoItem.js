const toDoItem = (title, des, date, priority) => {
    let myTitle = title;
    let myDes = des;
    let myDate = date;
    let myPriority = priority;

    const getTitle = () => {
        return myTitle;
    }
    
    const getDes = () => {
        return myDes;
    };

    const setDes = (newDes) => {
        myDes = newDes;
    }

    const getDate = () => {
        return myDate;
    }

    const setDate = (newDate) => {
        myDate = newDate;
    }

    const getPriorty = () => {
        return myPriority;
    }

    const setPriorty = (newPriorty) => {
        myPriority = newPriorty;
    }

    const toString = () => {
        return `${myTitle}, ${myDate}, ${myPriority}`;
    }

    return {getTitle, getDes, setDes, setDate, getDate, 
                    getPriorty, setPriorty, toString};
};

export default toDoItem;