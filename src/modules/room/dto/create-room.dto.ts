import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateRoomDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    rows: number;

    @ApiProperty()
    @IsNotEmpty()
    columns: number;

    @ApiProperty()
    @IsNotEmpty()
    state: boolean;
}
