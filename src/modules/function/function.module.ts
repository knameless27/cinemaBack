import { Module } from '@nestjs/common';
import { FunctionService } from './services/function.service';
import { FunctionsController } from './controllers/function.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FunctionModel, FunctionModelName } from 'src/models/function.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: FunctionModelName,
                schema: FunctionModel.schema
            }
        ])
    ],
    exports: [FunctionService],
    providers: [FunctionService],
    controllers: [FunctionsController]
})
export class FunctionModule { }
