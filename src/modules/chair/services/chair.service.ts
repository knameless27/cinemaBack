import { Inject, Injectable } from '@nestjs/common';
import { CreateChairDto } from '../dto/create-chair.dto';
import { UpdateChairDto } from '../dto/update-chair.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { ChairModelName } from 'src/models/chair.model';
import { IChair } from 'src/interfaces/chair/chair.interface';
import { NewRoomDto } from '../dto/new-room.dto';
import { RoomService } from 'src/modules/room/services/room.service';

@Injectable()
export class ChairService {
    @Inject(RoomService) private readonly roomService: RoomService;
    constructor(@InjectModel(ChairModelName) private chairModule: Model<IChair>) { }

    async create(CreateChairDto: CreateChairDto) {
        return standardResponse(await this.chairModule.create(CreateChairDto), 'Silla creada exitosamente!', 'success');
    }

    async createRoom(newRoomDto: NewRoomDto) {
        try {
            const { rows: rowRoom, columns: columnRoom } = (await this.roomService.findOne(newRoomDto.roomId)).data;

            const oldChairs = (await this.findByRoom(newRoomDto.roomId)).data

            const chairsToDelete = oldChairs.filter(chair => chair.column > columnRoom || chair.row > rowRoom)
            
            chairsToDelete.forEach(async chair => {
                await this.chairModule.deleteOne({ _id: chair._id })
            })

            newRoomDto.chairs.forEach(row => {
                row.forEach(async chair => {
                    const oldSeat = oldChairs.find(oldChair => oldChair.column == chair.column && oldChair.row == chair.row)
                    
                    if (oldChairs && chair.number == '0')
                        return await this.chairModule.deleteOne({ room: newRoomDto.roomId, column: chair.column, row: chair.row })

                    if (!oldSeat && chair.number) {
                        const newChair = { ...chair }
                        newChair.state = true
                        newChair.chair_status = '64669591f1bc66eeae09c234'
                        newChair.room = newRoomDto.roomId
                        this.create(newChair)
                    }
                })
            })

            const newChairs = (await this.findByRoom(newRoomDto.roomId)).data
            return standardResponse(newChairs, 'Sala creada exitosamente!', 'success');
        } catch (error) {
            console.log(error);
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
