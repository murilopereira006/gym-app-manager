import { v4 as uuidv4 } from 'uuid';
import UseCase from "../../shared/UseCase";
import UserCollection from "./UserCollection";
import { Name, Email, Password, Cpf } from '../../validators';
import { userInfo } from 'os';

type EntreceToRegisterUser = {
    name: Name
    email: Email
    password: Password
    cpf: Cpf
};

export default class CreateUser implements UseCase<EntreceToRegisterUser, void> {
    constructor(private readonly collection: UserCollection) { }

    async execute(entrece: EntreceToRegisterUser): Promise<void> {
        const { name, email, password, cpf } = entrece;

        const emailAlreadyExists = await this.collection.findUserByEmail(email);
        if (emailAlreadyExists) {
            throw new Error(`User ${email} already exists`);
        }
        
        const cpfAlreadyExists = await this.collection.findUserByCPF(cpf);
        if (cpfAlreadyExists) {
            throw new Error(`User ${cpf} already exists or CPF invalid`);
        }

        await this.collection.createUser({
            name, email, password, cpf,
            id: uuidv4()
        })
    }
};
