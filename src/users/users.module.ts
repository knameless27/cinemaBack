import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users } from './schema/users.schema';
import UserModel from 'src/models/user.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Users.name,
                schema: UserModel.schema
            }
        ])
    ],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule { }
