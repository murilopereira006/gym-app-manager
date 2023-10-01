import Elysia from "elysia";
import CreateUser from "../core/user/service/CreateUser";

export default class UserController {
    constructor(
        readonly server: Elysia,
        readonly useCase: CreateUser,
    ) {
        server.post('/users', async ({ body }) => {
            const { name, email, password, cpf } = body as any;
            await useCase.execute({ name, email, password, cpf });
        })
    };
};
