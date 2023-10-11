import { Elysia } from "elysia";
import middleware from "./external/middleware";
import CreateUser from "./core/user/service/CreateUser";
import UserController from "./adapters/UserController";

const PORT = process.env.PORT || 8080;
const app = new Elysia();

const aaa= new middleware();
const createUser = new CreateUser(aaa);
new UserController (app, createUser)

app.listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
