import { IsNotEmpty } from "class-validator";

export class CreateRoleDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    age:number;

    @IsNotEmpty()
    dni:string;

    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    state:boolean;

    @IsNotEmpty()
    role:string;
}
