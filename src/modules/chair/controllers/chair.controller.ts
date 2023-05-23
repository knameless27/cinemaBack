import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChairService } from '../services/chair.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateChairDto } from '../dto/create-chair.dto';
import { UpdateChairDto } from '../dto/update-chair.dto';

@ApiTags('chairs')
@Controller('chairs')
export class ChairsController {
    constructor(private readonly chairService: ChairService) { }

    @Post()
    create(@Body() createChairDto: CreateChairDto) {
        return this.chairService.create(createChairDto);
    }

    @Get()
    findAll() {
        return this.chairService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.chairService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateChairDto: UpdateChairDto) {
        return this.chairService.update(id, updateChairDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.chairService.remove(id);
    }
}
