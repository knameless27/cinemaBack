import { Injectable } from '@nestjs/common';
import { CreateChairDto } from '../dto/create-chair.dto';
import { UpdateChairDto } from '../dto/update-chair.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { ChairModelName } from 'src/models/chair.model';
import { IChair } from 'src/interfaces/chair/chair.interface';
import { NewRoomDto } from '../dto/new-room.dto';

@Injectable()
export class ChairService {
    constructor(@InjectModel(ChairModelName) private chairModule: Model<IChair>) { }

    async create(CreateChairDto: CreateChairDto) {
        return standardResponse(await this.chairModule.create(CreateChairDto), 'Silla creada exitosamente!', 'success');
    }

    async createRoom(newRoomDto: NewRoomDto) {
        try {
            const oldChairs = await this.findByRoom(newRoomDto.roomId)
            newRoomDto.chairs.forEach(row => {
                row.forEach(async chair => {
                    const oldSeat = oldChairs.data.find(oldChair => oldChair.column == chair.column && oldChair.row == chair.row)
                    if (!oldSeat) {
                        const newChair = { ...chair }
                        newChair.state = true
                        newChair.chair_status = '64669591f1bc66eeae09c234'
                        newChair.room = newRoomDto.roomId
                        this.create(newChair)
                    } else if (oldChairs.data.row >= oldSeat.row && oldChairs.data.column >= oldSeat.column && chair.number) {
                        await this.chairModule.deleteOne({ room: newRoomDto.roomId, column: chair.column, row: chair.row })
                    }
                })
            })
            const newRoom = await this.findByRoom(newRoomDto.roomId)
            return standardResponse(newRoom.data, 'Sala creada exitosamente!', 'success');
        } catch (error) {
            return standardResponse(error, 'Error en la creacion de las sillas!', 'error');
        }
    }

    async findAll() {
        return standardResponse(await this.chairModule.find({}), 'Sillas encontradas exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.chairModule.findById(id).populate(['chair_status', 'room']), 'Silla encontrada exitosamente!', 'success');
    }

    async findByRoom(room: string) {
        return standardResponse(await this.chairModule.find({ room }).populate(['chair_status', 'room']), 'Silla encontrada exitosamente!', 'success');
    }

    async update(id: string, UpdateChairDto: UpdateChairDto) {
        return standardResponse(await this.chairModule.updateOne({ _id: id }, UpdateChairDto), 'Silla editada exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.chairModule.deleteOne({ _id: id }), 'Silla eliminada exitosamente!', 'success');
    }
}
