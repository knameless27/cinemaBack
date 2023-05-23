import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RoomService } from '../services/room.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';

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
