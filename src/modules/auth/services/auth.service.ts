import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { LoginAuthDto } from '../dto/login-auth.dto';
import { RegisterAuthDto } from '../dto/register-auth.dto';
import { UserModelName } from 'src/models/user.model';
import { IUser } from 'src/interfaces/users/user.interface';
import { hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(UserModelName) private AuthModule: Model<IUser>, private jwtAuthService: JwtService) { }

    async login(CreateAuthDto: LoginAuthDto) {
        const { dni, password } = CreateAuthDto;
        const findUser = await this.AuthModule.findOne({ dni })

        if (!findUser) return standardResponse(null, 'Usuario no encontrado!', 'error');

        const checkPassword = await compare(password, findUser.password)

        if (!checkPassword) return standardResponse(null, 'Contraseña incorrecta!', 'error');

        const payload = {id: findUser._id, name: findUser.name, email: findUser.email, dni: findUser.dni, role: findUser.role}
        const token = await this.jwtAuthService.sign(payload)

        return standardResponse(token, 'Inicio de sesion exitoso!', 'success');
    }

    async register(CreateAuthDto: RegisterAuthDto) {
        const { password } = CreateAuthDto;
        const hashedPassword = await hash(password, 10);
        CreateAuthDto = { ...CreateAuthDto, password: hashedPassword };
        return standardResponse(await this.AuthModule.create(CreateAuthDto), 'Usuario registrado exitosamente!', 'success');
    }
}
