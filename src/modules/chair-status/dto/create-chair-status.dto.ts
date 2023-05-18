import { IsNotEmpty } from "class-validator";

export class CreateChairStatusDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    state:boolean;
}
