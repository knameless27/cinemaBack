import { Module } from '@nestjs/common';
import { RoomService } from './services/room.service';
import { RoomsController } from './controllers/room.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModel, RoomModelName } from 'src/models/room.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: RoomModelName,
                schema: RoomModel.schema
            }
        ])
    ],
    providers: [RoomService],
    controllers: [RoomsController]
})
export class RoomsModule { }
