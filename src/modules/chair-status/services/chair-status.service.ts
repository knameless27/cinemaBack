import { Injectable } from '@nestjs/common';
import { CreateChairStatusDto } from '../dto/create-chair-status.dto';
import { UpdateChairStatusDto } from '../dto/update-chair-status.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { ChairStatusModelName } from 'src/models/chair-status.model';
import { IChairStatus } from 'src/interfaces/chair-status/chair-status.interface';

@Injectable()
export class ChairStatusService {
    constructor(@InjectModel(ChairStatusModelName) private ChairStatusModule: Model<IChairStatus>) { }

    async create(CreateChairStatusDto: CreateChairStatusDto) {
        return standardResponse(await this.ChairStatusModule.create(CreateChairStatusDto), 'Estatus de silla creado exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.ChairStatusModule.find({}), 'Estatus de sillas encontrados exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.ChairStatusModule.findById(id), 'Estatus de silla encontrado exitosamente!', 'success');
    }

   async update(id: string, UpdateChairStatusDto: UpdateChairStatusDto) {
        return standardResponse(await this.ChairStatusModule.updateOne({_id: id}, UpdateChairStatusDto), 'Estatus de silla editado exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.ChairStatusModule.deleteOne({_id: id}), 'Estatus de silla eliminado exitosamente!', 'success');
    }
}
