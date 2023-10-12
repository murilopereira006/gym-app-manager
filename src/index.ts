import { Elysia } from "elysia";
import CreateUserController from "./adapters/CreateUserController";
import CreateUser from "./core/user/service/CreateUser";
import middleware from "./external/middleware";

const PORT = process.env.PORT || 8080;
const app = new Elysia();

app.listen(PORT);

const userActions = new middleware();

const createUser = new CreateUser(userActions)
new CreateUserController(app, createUser)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
