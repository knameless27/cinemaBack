import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {UserModel, UserModelName} from 'src/models/user.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: UserModelName,
                schema: UserModel.schema
            }
        ])
    ],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule { }
