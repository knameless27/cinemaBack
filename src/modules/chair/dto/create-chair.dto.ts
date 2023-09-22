import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateChairDto {
    _id: string;
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    state: boolean;

    @ApiProperty()
    @IsNotEmpty()
    row: number;

    @ApiProperty()
    @IsNotEmpty()
    column: number;

    @ApiProperty()
    @IsNotEmpty()
    number: string;

    @ApiProperty()
    @IsNotEmpty()
    chair_status: string;

    @ApiProperty()
    @IsNotEmpty()
    room: string;
}
