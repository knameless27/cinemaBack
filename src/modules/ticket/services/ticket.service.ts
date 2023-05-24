import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { UpdateTicketDto } from '../dto/update-ticket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { TicketModelName } from 'src/models/ticket.model';
import { ITicket } from 'src/interfaces/Ticket/ticket.interface';

@Injectable()
export class TicketService {
    constructor(@InjectModel(TicketModelName) private TicketModule: Model<ITicket>) { }

    async create(CreateTicketDto: CreateTicketDto) {
        return standardResponse(await this.TicketModule.create(CreateTicketDto), 'Tiquete creado exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.TicketModule.find({}).populate(['ticket_status', 'chair_room', 'function', 'user']), 'Tiquetes encontrados exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.TicketModule.findById(id), 'Tiquete encontrado exitosamente!', 'success');
    }

   async update(id: string, UpdateTicketDto: UpdateTicketDto) {
        return standardResponse(await this.TicketModule.updateOne({_id: id}, UpdateTicketDto), 'Tiquete editado exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.TicketModule.deleteOne({_id: id}), 'Tiquete eliminado exitosamente!', 'success');
    }
}
