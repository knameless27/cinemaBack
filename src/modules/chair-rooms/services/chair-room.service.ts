import { Injectable } from '@nestjs/common';
import { CreateChairRoomDto } from '../dto/create-chair-room.dto';
import { UpdateChairRoomDto } from '../dto/update-chair-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { ChairRoomModelName } from 'src/models/chair-room.model';
import { IChairRoom } from 'src/interfaces/chair-room/chair-room.interface';

@Injectable()
export class ChairRoomService {
    constructor(@InjectModel(ChairRoomModelName) private ChairRoomModule: Model<IChairRoom>) { }

    async create(CreateChairRoomDto: CreateChairRoomDto) {
        return standardResponse(await this.ChairRoomModule.create(CreateChairRoomDto), 'pivote de silla y sala creado exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.ChairRoomModule.find({}), 'pivotes de sillas y salas encontrados exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.ChairRoomModule.findById(id), 'pivote de silla y sala encontrado exitosamente!', 'success');
    }

   async update(id: string, UpdateChairRoomDto: UpdateChairRoomDto) {
        return standardResponse(await this.ChairRoomModule.updateOne({_id: id}, UpdateChairRoomDto), 'pivote de silla y sala editado exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.ChairRoomModule.deleteOne({_id: id}), 'pivote de silla y sala eliminado exitosamente!', 'success');
    }
}
