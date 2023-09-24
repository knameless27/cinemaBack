import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TicketService } from '../services/ticket.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { UpdateTicketDto } from '../dto/update-ticket.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { BuyTicketDto } from '../dto/buy-ticket.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {
    constructor(private readonly TicketService: TicketService) { }

    @Post()
    create(@Body() createTicketDto: CreateTicketDto) {
        return this.TicketService.create(createTicketDto);
    }
    
    @Post('buy')
    buyTickets(@Body() buyTicketDto: BuyTicketDto) {
        return this.TicketService.buyTickets(buyTicketDto);
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
