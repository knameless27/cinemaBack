import { IsNotEmpty } from "class-validator";

export class CreateFunctionDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    duration: number;

    @IsNotEmpty()
    movie_category: string;

    @IsNotEmpty()
    state:boolean;

    @IsNotEmpty()
    movie_clasification: string;
}
