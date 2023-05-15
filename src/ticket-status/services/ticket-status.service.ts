import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from '../dto/create-ticket-status.dto';
import { UpdateTicketStatusDto } from '../dto/update-ticket-status.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { TicketStatusModelName } from 'src/models/ticket-status.model';
import { ITicketStatus } from 'src/interfaces/ticket_status/ticket_status.interface';

@Injectable()
export class TicketStatusService {
    constructor(@InjectModel(TicketStatusModelName) private ticketStatusModule: Model<ITicketStatus>) { }

    async create(CreateTicketStatusDto: CreateTicketStatusDto) {
        return standardResponse(await this.ticketStatusModule.create(CreateTicketStatusDto), 'Estatus de tiquete creado exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.ticketStatusModule.find({}), 'Estatus de tiquetes encontrados exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.ticketStatusModule.findById(id), 'Estatus de tiquete encontrado exitosamente!', 'success');
    }

    async update(id: string, UpdateTicketStatusDto: UpdateTicketStatusDto) {
        return standardResponse(await this.ticketStatusModule.updateOne({ _id: id }, UpdateTicketStatusDto), 'Estatus de tiquete editado exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.ticketStatusModule.deleteOne({ _id: id }), 'Estatus de tiquete eliminado exitosamente!', 'success');
    }
}
