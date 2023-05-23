import { Module } from '@nestjs/common';
import { ChairRoomService } from './services/chair-room.service';
import { ChairRoomsController } from './controllers/chair-room.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChairRoomModel, ChairRoomModelName } from 'src/models/chair-room.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: ChairRoomModelName,
                schema: ChairRoomModel.schema
            }
        ])
    ],
    providers: [ChairRoomService],
    controllers: [ChairRoomsController]
})
export class ChairRoomModule { }
