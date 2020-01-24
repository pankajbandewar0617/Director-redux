export const getAllData = () => ({
    type: "GET_DATA",
});

export const deletedata = (id) => ({
    type: "DELETE",
    id,
});

export const getOneData = (id) => ({
    type: "GET_ONE",
    id
});

export const addNewData = (name) => ({
    type: "ADD_ONE",
    name
});

export const getEditData = (id) => ({
    type: "EDIT_ONE",
    id
});


