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

@Injectable()
export class TicketService {
    @Inject(FunctionService) private readonly functionService: FunctionService;
    @Inject(UsersService) private readonly userService: UsersService;
    constructor(@InjectModel(TicketModelName) private TicketModule: Model<ITicket>) { }

    async create(CreateTicketDto: CreateTicketDto) {
        const funcion = await this.functionService.findOne(CreateTicketDto.function)
        const user = await this.userService.findOne(CreateTicketDto.user)

        if (!funcion.data) return standardResponse(null, 'Funcion no encontrada!', 'error');

        if (!user.data) return standardResponse(null, 'Usuario no encontrado!', 'error');

        if (new Date(funcion.data.date) < new Date()) return standardResponse(null, 'La fecha de la funcion es menor a la fecha actual!', 'error');

        if (user.data.age < funcion.data.movie.movie_clasification.min_age) return standardResponse(null, 'No tiene la edad para ver esta pelicula!', 'error');

        return standardResponse(await this.TicketModule.create(CreateTicketDto), 'Tiquete creado exitosamente!', 'success');
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
