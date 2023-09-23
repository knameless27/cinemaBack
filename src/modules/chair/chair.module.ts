import { Module } from '@nestjs/common';
import { ChairService } from './services/chair.service';
import { ChairsController } from './controllers/chair.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChairModel, ChairModelName } from 'src/models/chair.model';
import { RoomsModule } from '../room/room.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: ChairModelName,
                schema: ChairModel.schema
            }
        ]),
        RoomsModule
    ],
    exports: [ChairService],
    providers: [ChairService],
    controllers: [ChairsController]
})
export class ChairsModule { }
