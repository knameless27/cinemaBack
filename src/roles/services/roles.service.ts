import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Roles, RolesDocument } from '../schema/roles.schema';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Roles.name) private rolesModule: Model<RolesDocument>) { }

    async create(CreateRoleDto: CreateRoleDto) {
        return standardResponse(await this.rolesModule.create(CreateRoleDto), 'Rol creado exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.rolesModule.find({}), 'Roles encontrados exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.rolesModule.findById(id), 'Rol encontrado exitosamente!', 'success');
    }

   async update(id: string, UpdateRoleDto: UpdateRoleDto) {
        return standardResponse(await this.rolesModule.updateOne({_id: id}, UpdateRoleDto), 'Rol editado exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.rolesModule.deleteOne({_id: id}), 'Rol eliminado exitosamente!', 'success');
    }
}
