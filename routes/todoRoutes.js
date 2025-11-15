const express=require("express")
const todoRouter=express.Router()
const todoItemController=require("../controller/todoController")
todoRouter.get("/",todoItemController.getTodoItems)
todoRouter.post("/",todoItemController.createTodo)
todoRouter.put("/:id/completed",todoItemController.markedTodoItems)
todoRouter.delete("/:id",todoItemController.deleteTodoItems)

module.exports=todoRouter