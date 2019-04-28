import mongoose from "mongoose";
import { Context } from "koa";
import { TodoSchema } from "../models/todoModel";

const Todo = mongoose.model("Todo", TodoSchema);

export class TodoController {
  public addTodo(cxt: Context) {
    const { request } = cxt;
    console.log(request)
    cxt.body = request.body;
  }
  public deleteTodo(cxt: Context) {}
  public updateTodo(cxt: Context) {}
  public list(cxt: Context) {}
}
