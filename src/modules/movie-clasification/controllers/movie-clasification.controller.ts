import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MovieClasificationService } from '../services/movie-clasification.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateMovieClasificationDto } from '../dto/create-movie-clasification.dto';
import { UpdateMovieClasificationDto } from '../dto/update-movie-clasification.dto';

@ApiTags('movie-clasification')
@Controller('movie-clasification')
export class MovieClasificationController {
    constructor(private readonly MovieClasificationService: MovieClasificationService) { }

    @Post()
    create(@Body() CreateMovieClasificationDto: CreateMovieClasificationDto) {
        return this.MovieClasificationService.create(CreateMovieClasificationDto);
    }

    @Get()
    findAll() {
        return this.MovieClasificationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.MovieClasificationService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateMovieClasificationDto: UpdateMovieClasificationDto) {
        return this.MovieClasificationService.update(id, UpdateMovieClasificationDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.MovieClasificationService.remove(id);
    }
}
