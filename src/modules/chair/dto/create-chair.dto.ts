import { IsNotEmpty } from "class-validator";

export class CreateChairDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    state:boolean;

    @IsNotEmpty()
    row: number;

    @IsNotEmpty()
    column: number;

    @IsNotEmpty()
    number: string;

    @IsNotEmpty()
    chair_status: string;
}
