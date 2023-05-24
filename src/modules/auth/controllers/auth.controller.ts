import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginAuthDto } from '../dto/login-auth.dto';
import { RegisterAuthDto } from '../dto/register-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) { }

    @Post('login')
    login(@Body() LoginAuthDto: LoginAuthDto) {
        return this.AuthService.login(LoginAuthDto);
    }

    @Post('register')
    register(@Body() registerAuthDto: RegisterAuthDto) {
        return this.AuthService.register(registerAuthDto);
    }
}
