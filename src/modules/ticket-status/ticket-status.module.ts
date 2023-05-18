import { Module } from '@nestjs/common';
import { TicketStatusService } from './services/ticket-status.service';
import { TicketStatusController } from './controllers/ticket-status.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {TicketStatusModel, TicketStatusModelName} from 'src/models/ticket-status.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: TicketStatusModelName,
                schema: TicketStatusModel.schema
            }
        ])
    ],
    providers: [TicketStatusService],
    controllers: [TicketStatusController]
})
export class TicketStatusModule { }
