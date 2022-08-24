const {
    getAllTasks,
    getTaskById,
    postTask,
    putTask,
    deleteTask,
} = require("../controllers/TaskController");
const { taskRules } = require("../middleware/Validator");

const express = require("express");

// Create the task router
const router = express.Router();

// Set endpoints for it
router.route("/").get(getAllTasks).post(taskRules, postTask);
router
    .route("/:id")
    .get(getTaskById)
    .patch(taskRules, putTask)
    .delete(deleteTask);

router.all("/*", (req, res) => res.status(405).send());

// Export it
module.exports = router;
