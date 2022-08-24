const {
    getAll,
    getById,
    deleteById,
    create,
    update,
} = require("../services/TaskService");
const Payload = require("./ApiResponsePayload");
const asyncWrapper = require("../middleware/AsyncWrapper");
const { throwApiError } = require("../Errors/ApiError");

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await getAll();
    res.status(200).json(new Payload(true, tasks));
});

const getTaskById = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params;
    const foundTask = await getById(taskId);

    if (foundTask) {
        return res.status(200).json(new Payload(true, foundTask));
    }
    next(throwApiError(`Task with id ${taskId} does not exist`, 404));
});

const postTask = asyncWrapper(async (req, res) => {
    const newTask = req.body;
    const savedTask = await create(newTask);
    res.status(201).json(new Payload(true, savedTask));
});

const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params;
    const deletedTask = await deleteById(taskId);

    if (deletedTask) {
        return res.status(200).json(new Payload(true, deletedTask));
    }
    next(throwApiError(`Task with id ${taskId} does not exist`, 404));
});

const putTask = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params;
    const updatedTask = req.body;
    const savedTask = await update(taskId, updatedTask);

    if (savedTask) {
        return res.status(200).json(new Payload(true, savedTask));
    }
    next(throwApiError(`Task with id ${taskId} does not exist`, 404));
});

module.exports = { getAllTasks, getTaskById, postTask, deleteTask, putTask };
