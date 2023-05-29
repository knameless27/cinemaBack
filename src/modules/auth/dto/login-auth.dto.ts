import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class LoginAuthDto {

    @ApiProperty()
    @IsNotEmpty()
    dni:string;

    @ApiProperty()
    @MinLength(4)
    @MaxLength(12)
    password:string;
}
