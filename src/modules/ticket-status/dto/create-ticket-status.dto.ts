import { IsNotEmpty } from "class-validator";

export class CreateTicketStatusDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    state:boolean;
}
