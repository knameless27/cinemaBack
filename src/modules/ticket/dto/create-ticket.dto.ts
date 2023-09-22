import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTicketDto {

    @ApiProperty()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @IsNotEmpty()
    state:boolean;

    @ApiProperty()
    ticket_status: string;

    @ApiProperty()
    @IsNotEmpty()
    chair: string;

    @ApiProperty()
    @IsNotEmpty()
    function: string;

    @ApiProperty()
    @IsNotEmpty()
    user: string;
}
