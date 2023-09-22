import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CreateChairDto } from "./create-chair.dto";

export class NewRoomDto {
    @ApiProperty()
    @IsNotEmpty()
    roomId:string;
    
    @ApiProperty()
    @IsNotEmpty()
    chairs: CreateChairDto[][];
}
