import { Injectable } from '@nestjs/common';
import { CreateChairDto } from '../dto/create-chair.dto';
import { UpdateChairDto } from '../dto/update-chair.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { ChairModelName } from 'src/models/chair.model';
import { IChair } from 'src/interfaces/chair/chair.interface';

@Injectable()
export class ChairService {
    constructor(@InjectModel(ChairModelName) private chairModule: Model<IChair>) { }

    async create(CreateChairDto: CreateChairDto) {
        return standardResponse(await this.chairModule.create(CreateChairDto), 'Silla creada exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.chairModule.find({}), 'Sillas encontradas exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.chairModule.findById(id), 'Silla encontrada exitosamente!', 'success');
    }

   async update(id: string, UpdateChairDto: UpdateChairDto) {
        return standardResponse(await this.chairModule.updateOne({_id: id}, UpdateChairDto), 'Silla editada exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.chairModule.deleteOne({_id: id}), 'Silla eliminada exitosamente!', 'success');
    }
}
