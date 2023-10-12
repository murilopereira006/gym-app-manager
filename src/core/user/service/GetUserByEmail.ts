import UseCase from "../../shared/UseCase";
import UserCollection from "./UserCollection";
import { Email } from '../../validators';
import User from "../model/User";

export default class GetUserByEmail implements UseCase<Email, User | String > {
    constructor(private readonly collection: UserCollection) { }

    async execute(entrece: Email): Promise<User | String> {
        const { email } = entrece;

        const response = await this.collection.findUserByEmail(email);
        if (!response) return "usuario nao encontrado";
        return response;
    }
};
