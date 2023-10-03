import { Name, Email, Password, Cpf } from '../../validators';
export default interface User {
    id: string;
    name: Name;
    email: Email;
    password: Password;
    cpf: Cpf;
    created_at?: Date;
    updated_at?: Date;
}