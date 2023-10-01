import { Elysia } from "elysia";

const PORT = process.env.PORT || 8080;
const app = new Elysia();

app.listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
