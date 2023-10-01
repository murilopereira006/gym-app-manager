export default interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    cpf: number;
    created_at?: Date;
    updated_at?: Date;
}