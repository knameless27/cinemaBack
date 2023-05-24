import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ChairStatusService } from '../services/chair-status.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateChairStatusDto } from '../dto/create-chair-status.dto';
import { UpdateChairStatusDto } from '../dto/update-chair-status.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('chair-statuses')
@Controller('chair-statuses')
export class ChairStatussController {
    constructor(private readonly ChairStatusService: ChairStatusService) { }

    @Post()
    create(@Body() CreateChairStatusDto: CreateChairStatusDto) {
        return this.ChairStatusService.create(CreateChairStatusDto);
    }

    @Get()
    findAll() {
        return this.ChairStatusService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ChairStatusService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateChairStatusDto: UpdateChairStatusDto) {
        return this.ChairStatusService.update(id, updateChairStatusDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ChairStatusService.remove(id);
    }
}
