import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, MinDate } from "class-validator";

export class CreateFunctionDto {
    @ApiProperty()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @Transform(({ value }) => new Date(value))
    @MinDate(new Date())
    @IsNotEmpty()
    date: Date;

    @ApiProperty()
    @IsNotEmpty()
    state:boolean;

    @ApiProperty()
    @IsNotEmpty()
    movie: string;

    @ApiProperty()
    room: string;
}
