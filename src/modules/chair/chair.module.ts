import { Module } from '@nestjs/common';
import { ChairService } from './services/chair.service';
import { ChairsController } from './controllers/chair.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChairModel, ChairModelName } from 'src/models/chair.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: ChairModelName,
                schema: ChairModel.schema
            }
        ])
    ],
    providers: [ChairService],
    controllers: [ChairsController]
})
export class ChairsModule { }
