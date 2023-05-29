import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateMovieClasificationDto {
    @ApiProperty()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @IsNotEmpty()
    min_age:number;

    @ApiProperty()
    @IsNotEmpty()
    state:boolean;
}
