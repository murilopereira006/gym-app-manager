import Elysia from "elysia";
import GetUserByEmail from "../core/user/service/GetUserByEmail";

export default class FindUserByEmailController {
    constructor(
        readonly server: Elysia,
        readonly useCase: GetUserByEmail,
    ) {
        server.get ('/user', async ({ body }) => {
            const {  email } = body as any;
            return await useCase.execute({ email });
        });
    };
};
