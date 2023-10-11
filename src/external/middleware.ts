import { PrismaClient } from '@prisma/client'
import User from "../core/user/model/User";
import UserCollection from "../core/user/service/UserCollection";

export default class middleware implements UserCollection {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }
    
    findUserByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                email
            }
        })
    }
    findUserByCPF(cpf: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                cpf
            }
        })
    }

    createUser(user: User): Promise<User> {
        return this.prisma.user.create({ data: user })
    }

}
