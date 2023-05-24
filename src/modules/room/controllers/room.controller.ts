import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { RoomService } from '../services/room.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomService: RoomService) { }

    @Post()
    create(@Body() createRoomDto: CreateRoomDto) {
        return this.roomService.create(createRoomDto);
    }

    @Get()
    findAll() {
        return this.roomService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.roomService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
        return this.roomService.update(id, updateRoomDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.roomService.remove(id);
    }
}
