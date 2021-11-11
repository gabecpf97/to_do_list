const listControl = () => {
    const projects = [];

    const getProjects = () => {
        return projects;
    }

    const addList = (list) => {
        projects.push(list);
    }

    

    return {getProjects, addList};
}

export default listControl;