import { Transform } from "class-transformer";
import { IsNotEmpty, MinDate } from "class-validator";

export class CreateFunctionDto {
    @IsNotEmpty()
    name:string;

    @Transform(({ value }) => new Date(value))
    @MinDate(new Date())
    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    state:boolean;

    @IsNotEmpty()
    movie: string;

    room: string;
}
