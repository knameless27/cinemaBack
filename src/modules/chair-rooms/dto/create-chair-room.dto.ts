import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateChairRoomDto {
    @ApiProperty()
    @IsNotEmpty()
    chair:string;

    @ApiProperty()
    @IsNotEmpty()
    room:string;

    @ApiProperty()
    @IsNotEmpty()
    state:boolean;
}
