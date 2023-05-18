import { Injectable } from '@nestjs/common';
import { CreateFunctionDto } from '../dto/create-function.dto';
import { UpdateFunctionDto } from '../dto/update-function.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { FunctionModelName } from 'src/models/function.model';
import { IFunction } from 'src/interfaces/function/function.interface';

@Injectable()
export class FunctionService {
    constructor(@InjectModel(FunctionModelName) private FunctionModule: Model<IFunction>) { }

    async create(CreateFunctionDto: CreateFunctionDto) {
        return standardResponse(await this.FunctionModule.create(CreateFunctionDto), 'Pelicula creada exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.FunctionModule.find({}), 'Peliculas encontradas exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.FunctionModule.findById(id), 'Pelicula encontrada exitosamente!', 'success');
    }

   async update(id: string, UpdateFunctionDto: UpdateFunctionDto) {
        return standardResponse(await this.FunctionModule.updateOne({_id: id}, UpdateFunctionDto), 'Pelicula editada exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.FunctionModule.deleteOne({_id: id}), 'Pelicula eliminada exitosamente!', 'success');
    }
}
