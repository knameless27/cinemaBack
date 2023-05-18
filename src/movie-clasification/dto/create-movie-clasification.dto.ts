import { IsNotEmpty } from "class-validator";

export class CreateMovieClasificationDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    min_age:number;

    @IsNotEmpty()
    state:boolean;
}
