import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TicketService } from '../services/ticket.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { UpdateTicketDto } from '../dto/update-ticket.dto';

@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {
    constructor(private readonly TicketService: TicketService) { }

    @Post()
    create(@Body() createTicketDto: CreateTicketDto) {
        return this.TicketService.create(createTicketDto);
    }

    @Get()
    findAll() {
        return this.TicketService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.TicketService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
        return this.TicketService.update(id, updateTicketDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.TicketService.remove(id);
    }
}
