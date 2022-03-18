import { Router } from "express"
import {
	onGetAllTodos,
	onCreateNewTodo,
	onGetTodoById,
	onUpdateTodoById,
	onDeleteTodoById,
} from "../controllers/todo.controller"

const router = Router()

router.get("/all", onGetAllTodos)
router.post("/new", onCreateNewTodo)
router.get("/todo/:id", onGetTodoById)
router.put("/update/:id", onUpdateTodoById)
router.delete("/delete/:id", onDeleteTodoById)

module.exports = router
