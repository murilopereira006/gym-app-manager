import { v4 as uuidv4 } from 'uuid';
import UseCase from "../../shared/UseCase";
import UserCollection from "./UserCollection";

type EntreceToRegisterUser = {
    name: string
    email: string
    password: string
    cpf: number
};

export default class CreateUser implements UseCase<EntreceToRegisterUser, void> {
    constructor(private readonly collection: UserCollection) { }

    async execute(entrece: EntreceToRegisterUser): Promise<void> {
        const { name, email, password, cpf } = entrece;

        const userAlreadyExists = await this.collection.findUserByEmail(email) || this.collection.findUserByCPF(cpf);
        if (userAlreadyExists) {
            throw new Error(`User ${email} already exists`);
        }

        await this.collection.createUser({
            name, email, password, cpf,
            id: uuidv4()
        })
    }
};