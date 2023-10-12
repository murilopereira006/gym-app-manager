import Elysia from "elysia";
import CreateUser from "../core/user/service/CreateUser";

export default class CreateUserController {
    constructor(
        readonly server: Elysia,
        readonly useCase: CreateUser,
    ) {
        server.post('/createuser', async ({ body }) => {
            const { name, email, password, cpf } = body as any;
            await useCase.execute({ name, email, password, cpf });

            return "Usuario criado com sucesso!"
        });
    };
};
