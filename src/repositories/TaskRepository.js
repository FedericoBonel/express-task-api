const TaskModel = require("../model/Task");
const { Types } = require("mongoose");

const save = async (task) => {
    if (!task._id) {
        return TaskModel.create({...task, _id: new Types.ObjectId()});
    } else {
        return TaskModel.findOneAndUpdate({ _id: task._id }, task, {
            new: true,
        }).exec();
    }
};

const find = async () => {
    return TaskModel.find({}).exec();
};

const findById = async (id) => {
    return TaskModel.findById(id).exec();
};

const findAndDelete = async (id) => {
    return TaskModel.findByIdAndDelete(id).exec();
};

module.exports = { save, find, findById, findAndDelete };
