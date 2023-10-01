import User from "../model/User";

export default interface UserCollection {
    findUserByEmail(email: string): Promise<User | null>;
    findUserByCPF(cpf: number): Promise<User | null>;
    createUser(user: User): Promise<User>;
};