import { Module } from '@nestjs/common';
import { RolesService } from './services/roles.service';
import { RolesController } from './controllers/roles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {RoleModel, RoleModelName} from 'src/models/role.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: RoleModelName,
                schema: RoleModel.schema
            }
        ])
    ],
    providers: [RolesService],
    controllers: [RolesController]
})
export class RolesModule { }
