import { IsNotEmpty } from "class-validator";

export class CreateFunctionDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    state:boolean;

    @IsNotEmpty()
    movie: string;
}
