import { Module } from '@nestjs/common';
import { TicketService } from './services/ticket.service';
import { TicketsController } from './controllers/ticket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModel, TicketModelName } from 'src/models/ticket.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: TicketModelName,
                schema: TicketModel.schema
            }
        ])
    ],
    providers: [TicketService],
    controllers: [TicketsController]
})
export class TicketsModule { }
