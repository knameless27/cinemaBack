import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TicketStatusService } from '../services/ticket-status.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateTicketStatusDto } from '../dto/create-ticket-status.dto';
import { UpdateTicketStatusDto } from '../dto/update-ticket-status.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('ticket-status')
@Controller('ticket-status')
export class TicketStatusController {
    constructor(private readonly ticketStatusService: TicketStatusService) { }

    @Post()
    create(@Body() CreateTicketStatusDto: CreateTicketStatusDto) {
        return this.ticketStatusService.create(CreateTicketStatusDto);
    }

    @Get()
    findAll() {
        return this.ticketStatusService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ticketStatusService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateTicketStatusDto: UpdateTicketStatusDto) {
        return this.ticketStatusService.update(id, UpdateTicketStatusDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ticketStatusService.remove(id);
    }
}
