export interface IUser {
    name: string;
    email: string;
    age: number;
    dni: string;
    password: string;
    role: {
        name: string;
    };
    state: boolean;
}
