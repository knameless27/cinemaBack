import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../schema/users.schema';
import { Model } from 'mongoose';
import { standardResponse } from 'src/utils/response';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private usersModule: Model<UsersDocument>) { }

    async create(CreateUserDto: CreateUserDto) {
        return standardResponse(await this.usersModule.create(CreateUserDto), 'Usuario creado exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.usersModule.find({}), 'Usuarios encontrados exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.usersModule.findById(id).populate('Role'), 'Usuario encontrado exitosamente!', 'success');
    }

   async update(id: string, UpdateUserDto: UpdateUserDto) {
        return standardResponse(await this.usersModule.updateOne({_id: id}, UpdateUserDto), 'Usuario editado exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.usersModule.deleteOne({_id: id}), 'Usuario eliminado exitosamente!', 'success');
    }
}
