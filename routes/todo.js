const express = require("express");
const router = express.Router();
// const Todo = require("./models/Todo.js");
const todoController = require("../controllers/todoController");
const validator = require("../middlewares/validator");
const todoSchema = require("../validations/todoSchema");
const jwtAuth = require("../middlewares/jwtAuth");

router.post(
    "/",
    validator(todoSchema.createTodoschema),
    jwtAuth,
    todoController.createTodo
);

router.get("/", todoController.getTodos);

router.delete(
    "/:id",
    validator(todoSchema.deleteToDoSchema, "params"),
    jwtAuth,
    todoController.deleteTodoById
);

module.exports = router;
