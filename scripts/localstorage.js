const saveToLocalStorage = (student) => {
    let addStudent = getLocalStorage();

    if(!addStudent.includes(student)){
        addStudent.push(student);
    }
    localStorage.setItem("AddStudent", JSON.stringify(digimon));
}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("AddStudent");

    if(localStorageData == null){
        return [];
    }
}

const removeFromLocalStorage = (student) => {
    let addStudent = getLocalStorage();

    let namedIndex = addStudent.indexOf(student);

    addStudent.splice(namedIndex, 1)

    localStorage.setItem("addStudent", JSON.stringify(addStudent));
}