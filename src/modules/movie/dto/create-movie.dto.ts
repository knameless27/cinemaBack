import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateMovieDto {
    @ApiProperty()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @IsNotEmpty()
    duration: number;

    @ApiProperty()
    @IsNotEmpty()
    movie_category: string;

    @ApiProperty()
    @IsNotEmpty()
    state:boolean;

    @ApiProperty()
    @IsNotEmpty()
    movie_clasification: string;
}
