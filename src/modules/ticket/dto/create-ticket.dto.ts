import { IsNotEmpty } from "class-validator";

export class CreateTicketDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    state:boolean;

    @IsNotEmpty()
    ticket_status: string;

    @IsNotEmpty()
    chair_room: string;

    @IsNotEmpty()
    function: string;

    @IsNotEmpty()
    user: string;
}
