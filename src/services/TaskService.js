const {
    save,
    find,
    findById,
    findAndDelete,
} = require("../repositories/TaskRepository");

const getAll = async () => {
    return find();
};

const getById = async (id) => {
    return findById(id);
};

const deleteById = async (id) => {
    return findAndDelete(id);
};

const create = async (task) => {
    const {_id, ...newTask} = task;
    return save(newTask);
};

const update = (id, task) => {
    return save({...task, _id: id});
};

module.exports = { getAll, getById, deleteById, create, update };
