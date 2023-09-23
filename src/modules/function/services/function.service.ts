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
        return standardResponse(await this.FunctionModule.create(CreateFunctionDto), 'Funcion creada exitosamente!', 'success');
    }

    async findAll() {
        const func = await this.FunctionModule.find({}).sort({ date: -1 }).populate(['room', 'movie']).populate({
            path: 'movie',
            populate: [
                {
                    path: 'movie_clasification',
                    model: 'Movie_Clasification'
                },
                {
                    path: 'movie_category',
                    model: 'Movie_Category'
                }
            ],
        })
        return standardResponse(func, 'Funciones encontradas exitosamente!', 'success');
    }

    async findOne(id: string) {
        const func = await this.FunctionModule.findById(id).populate(['movie', 'room']).populate({
            path: 'movie',
            populate: {
                path: 'movie_clasification',
                model: 'Movie_Clasification'
            }
        })
        return standardResponse(func, 'Funcion encontrada exitosamente!', 'success');
    }

    async update(id: string, UpdateFunctionDto: UpdateFunctionDto) {
        return standardResponse(await this.FunctionModule.updateOne({ _id: id }, UpdateFunctionDto), 'Funcion editada exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.FunctionModule.deleteOne({ _id: id }), 'Funcion eliminada exitosamente!', 'success');
    }
}
