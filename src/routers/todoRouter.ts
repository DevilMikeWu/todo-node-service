import { Context } from "koa";
import Router from "koa-router";
import { TodoController } from "../controllers/todoController";

export default class Routes {
  public todoController: TodoController;

  constructor(){
    this.todoController = new TodoController();
  }
  public routes(app: any): void {
    const todos = new Router({ prefix: "/todos" });
    todos.get("/", async (ctx: Context, next: any) => {
      // list todo list
      await next();
      ctx.body = {
        message: "get all"
      };
    });

    todos.get("/:id", async (ctx: Context, next: any) => {
      // list todo list
      await next();
      ctx.body = {
        message: "get a"
      };
    });

    todos.post("/", async (ctx: Context, next: any) => {
      // add  todo list
      await next();
      this.todoController.addTodo(ctx);
    });

    todos.put("/", async (ctx: Context, next: any) => {
      // update todo
      await next();
    });

    todos.delete("/:id", async (ctx: Context, next: any) => {
      // delete todo
      await next();
    });

    app.use(todos.routes());
  }
}
