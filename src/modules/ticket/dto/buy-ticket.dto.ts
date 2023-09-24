import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CreateChairDto } from "src/modules/chair/dto/create-chair.dto";

export class BuyTicketDto {
    @ApiProperty()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    user: string;

    @ApiProperty()
    @IsNotEmpty()
    function: {
        _id: string;
        date: string;
    };
    
    @ApiProperty()
    @IsNotEmpty()
    chairs: CreateChairDto[];
}
