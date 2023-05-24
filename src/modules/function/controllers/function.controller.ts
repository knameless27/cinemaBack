import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { FunctionService } from '../services/function.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateFunctionDto } from '../dto/create-function.dto';
import { UpdateFunctionDto } from '../dto/update-function.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('functions')
@Controller('functions')
export class FunctionsController {
    constructor(private readonly functionService: FunctionService) { }

    @Post()
    create(@Body() createFunctionDto: CreateFunctionDto) {
        return this.functionService.create(createFunctionDto);
    }

    @Get()
    findAll() {
        return this.functionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.functionService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateFunctionDto: UpdateFunctionDto) {
        return this.functionService.update(id, updateFunctionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.functionService.remove(id);
    }
}
