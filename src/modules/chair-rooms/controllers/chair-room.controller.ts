import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ChairRoomService } from '../services/chair-room.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateChairRoomDto } from '../dto/create-chair-room.dto';
import { UpdateChairRoomDto } from '../dto/update-chair-room.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('chair-rooms')
@Controller('chair-rooms')
export class ChairRoomsController {
    constructor(private readonly ChairRoomService: ChairRoomService) { }

    @Post()
    create(@Body() CreateChairRoomDto: CreateChairRoomDto) {
        return this.ChairRoomService.create(CreateChairRoomDto);
    }

    @Get()
    findAll() {
        return this.ChairRoomService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ChairRoomService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateChairRoomDto: UpdateChairRoomDto) {
        return this.ChairRoomService.update(id, UpdateChairRoomDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ChairRoomService.remove(id);
    }
}
