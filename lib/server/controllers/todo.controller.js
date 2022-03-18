"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDeleteTodoById = exports.onUpdateTodoById = exports.onGetTodoById = exports.onCreateNewTodo = exports.onGetAllTodos = void 0;
const database_1 = __importDefault(require("../database/database"));
const onGetAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield database_1.default.query("SELECT * FROM todos");
        res.status(200).json(allTodos.rows);
    }
    catch (err) {
        console.error(`Error in getting todos: ${err}`);
    }
});
exports.onGetAllTodos = onGetAllTodos;
const onCreateNewTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.desc)
        return res.status(400).json("Task description is required!");
    const { desc } = req.body;
    try {
        const newTodo = yield database_1.default.query("INSERT INTO todos (description) VALUES($1) RETURNING *", [
            desc,
        ]);
        res.status(200).json(newTodo.rows[0]);
    }
    catch (err) {
        console.error(`Error in creating a new todo: ${err}`);
    }
});
exports.onCreateNewTodo = onCreateNewTodo;
const onGetTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id)
        return res.status(400).json("Todo ID is required!");
    const { id } = req.params;
    try {
        const oneToDo = yield database_1.default.query("SELECT * FROM todos WHERE _id = $1", [id]);
        res.status(200).json(oneToDo.rows[0]);
    }
    catch (err) {
        console.error(`Error in getting todos: ${err}`);
    }
});
exports.onGetTodoById = onGetTodoById;
const onUpdateTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id)
        return res.status(400).json("Todo ID is required!");
    const { id } = req.params;
    const { desc } = req.body;
    try {
        yield database_1.default.query("UPDATE todos SET description = $1 WHERE _id = $2", [desc, id]);
        res.status(200).json("Updated!");
    }
    catch (err) {
        console.error(`Error in getting todos: ${err}`);
    }
});
exports.onUpdateTodoById = onUpdateTodoById;
const onDeleteTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id)
        return res.status(400).json("Todo ID is required!");
    const { id } = req.params;
    try {
        yield database_1.default.query("DELETE FROM todos WHERE _id = $1", [id]);
        res.status(200).json("Todo item deleted");
    }
    catch (err) {
        console.error(`Error in getting todos: ${err}`);
    }
});
exports.onDeleteTodoById = onDeleteTodoById;
