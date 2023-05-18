import { Module } from '@nestjs/common';
import { ChairStatusService } from './services/chair-status.service';
import { ChairStatussController } from './controllers/chair-status.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChairStatusModel, ChairStatusModelName } from 'src/models/chair-status.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: ChairStatusModelName,
                schema: ChairStatusModel.schema
            }
        ])
    ],
    providers: [ChairStatusService],
    controllers: [ChairStatussController]
})
export class ChairStatusModule { }
