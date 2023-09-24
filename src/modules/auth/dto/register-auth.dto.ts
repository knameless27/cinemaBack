import { PartialType } from '@nestjs/mapped-types';
import { LoginAuthDto } from './login-auth.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @ApiProperty()
    @IsNotEmpty()
    name:string;
    
    @ApiProperty()
    email:string;
    
    @ApiProperty()
    @IsNotEmpty()
    age:string;

    @ApiProperty()
    @IsNotEmpty()
    state:boolean;
}
