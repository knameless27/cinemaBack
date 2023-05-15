import { IsNotEmpty } from "class-validator";

export class CreateMovieCategoryDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    state:boolean;
}
