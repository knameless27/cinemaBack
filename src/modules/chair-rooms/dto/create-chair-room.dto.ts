import { IsNotEmpty } from "class-validator";

export class CreateChairRoomDto {
    @IsNotEmpty()
    chair:string;

    @IsNotEmpty()
    room:string;

    @IsNotEmpty()
    state:boolean;
}
