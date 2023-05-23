import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { RoomModelName } from 'src/models/Room.model';
import { IRoom } from 'src/interfaces/Room/Room.interface';

@Injectable()
export class RoomService {
    constructor(@InjectModel(RoomModelName) private roomModule: Model<IRoom>) { }

    async create(CreateRoomDto: CreateRoomDto) {
        return standardResponse(await this.roomModule.create(CreateRoomDto), 'Sala creada exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.roomModule.find({}), 'Salas encontradas exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.roomModule.findById(id), 'Sala encontrada exitosamente!', 'success');
    }

   async update(id: string, UpdateRoomDto: UpdateRoomDto) {
        return standardResponse(await this.roomModule.updateOne({_id: id}, UpdateRoomDto), 'Sala editada exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.roomModule.deleteOne({_id: id}), 'Sala eliminada exitosamente!', 'success');
    }
}
