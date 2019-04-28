import koa from "koa";
import fs from "fs";
import path from "path";
import Router from "koa-router";
import Routes from "./routers/todoRouter";
import serve from "koa-static";
import mount from 'koa-mount'
import bodyParser from "koa-bodyparser";
import SocketConnection from "./websocker";
const app = new koa();
const router = new Router();
const socketConnection = new SocketConnection();


const publicFolder = path.join(__dirname, '../', 'public')
// router.get("/", async ctx => {
//   console.log(__dirname)
//   ctx.type = "html";
//   ctx.body = fs.createReadStream(`${publicFolder}/index.html`);
// });

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

new Routes().routes(app);

app.use(bodyParser());
// statically serve public
app.use(mount('/', serve(publicFolder)));
// CROS
app.use(async (ctx, next) => {
  await next();
  const res = ctx.response;
  res.set("Access-Control-Allow-Origin", "*");
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

app.use(router.routes());

app.listen(3000);

// start web socket
socketConnection.start();

console.log("Server running on port 3000");
