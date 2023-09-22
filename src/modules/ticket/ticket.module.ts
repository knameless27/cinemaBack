import { Module } from '@nestjs/common';
import { TicketService } from './services/ticket.service';
import { TicketsController } from './controllers/ticket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModel, TicketModelName } from 'src/models/ticket.model';
import { FunctionModule } from '../function/function.module';
import { UsersModule } from '../users/users.module';
import { ChairsModule } from '../chair/chair.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: TicketModelName,
                schema: TicketModel.schema
            }
        ]),
        FunctionModule,
        UsersModule,
        ChairsModule
    ],
    providers: [TicketService],
    controllers: [TicketsController]
})
export class TicketsModule { }
