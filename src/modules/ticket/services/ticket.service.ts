import { Inject, Injectable } from '@nestjs/common';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { UpdateTicketDto } from '../dto/update-ticket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { TicketModelName } from 'src/models/ticket.model';
import { ITicket } from 'src/interfaces/Ticket/ticket.interface';
import { FunctionService } from 'src/modules/function/services/function.service';
import { UsersService } from 'src/modules/users/services/users.service';
import { ChairRoomService } from 'src/modules/chair-rooms/services/chair-room.service';
import { ChairService } from 'src/modules/chair/services/chair.service';

@Injectable()
export class TicketService {
    @Inject(FunctionService) private readonly functionService: FunctionService;
    @Inject(UsersService) private readonly userService: UsersService;
    @Inject(ChairRoomService) private chairRoomService: ChairRoomService
    @Inject(ChairService) private chairService: ChairService
    constructor(@InjectModel(TicketModelName) private TicketModule: Model<ITicket>) { }

    async create(CreateTicketDto: CreateTicketDto) {
        try {
            const funcion = await this.functionService.findOne(CreateTicketDto.function)
            const user = await this.userService.findOne(CreateTicketDto.user)
            const chair_room = await this.chairRoomService.findOne(CreateTicketDto.chair_room)
            const chair = await this.chairService.findOne(chair_room.data.chair)

            if (!chair_room.data) return standardResponse(null, 'Silla no encontrada!', 'error');

            if (!funcion.data) return standardResponse(null, 'Funcion no encontrada!', 'error');

            if (!user.data) return standardResponse(null, 'Usuario no encontrado!', 'error');

            if (new Date(funcion.data.date) < new Date()) return standardResponse(null, 'La fecha de la funcion es menor a la fecha actual!', 'error');

            if (user.data.age < funcion.data.movie.movie_clasification.min_age) return standardResponse(null, 'No tiene la edad para ver esta pelicula!', 'error');

            if (chair.data.chair_status.name != 'disponible') return standardResponse(null, 'La silla ya ha sido ocupada!', 'error');

            const tiquete = CreateTicketDto

            tiquete.name = chair_room.data.room.name + " - " +chair.data.column + " - " + chair.data.row

            const silla = {
                // vendida
                chair_status: "64669598f1bc66eeae09c236"
            }

            this.chairService.update(chair.data._id, silla)

            return standardResponse(await this.TicketModule.create(tiquete), 'Tiquete creado exitosamente!', 'success');

        } catch (error) {
            return standardResponse(null, 'Error en la venta de tiquete!', 'error');
        }
    }

    async findAll() {
        return standardResponse(await this.TicketModule.find({}).populate(['ticket_status', 'chair_room', 'function', 'user']), 'Tiquetes encontrados exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.TicketModule.findById(id), 'Tiquete encontrado exitosamente!', 'success');
    }

    async update(id: string, UpdateTicketDto: UpdateTicketDto) {
        return standardResponse(await this.TicketModule.updateOne({ _id: id }, UpdateTicketDto), 'Tiquete editado exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.TicketModule.deleteOne({ _id: id }), 'Tiquete eliminado exitosamente!', 'success');
    }
}
