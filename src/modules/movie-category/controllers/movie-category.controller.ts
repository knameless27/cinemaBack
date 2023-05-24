import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { MovieCategoryService } from '../services/movie-category.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateMovieCategoryDto } from '../dto/create-movie-category.dto';
import { UpdateMovieCategoryDto } from '../dto/update-movie-category.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('movie-category')
@Controller('movie-category')
export class MovieCategoryController {
    constructor(private readonly MovieCategoryService: MovieCategoryService) { }

    @Post()
    create(@Body() CreateMovieCategoryDto: CreateMovieCategoryDto) {
        return this.MovieCategoryService.create(CreateMovieCategoryDto);
    }

    @Get()
    findAll() {
        return this.MovieCategoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.MovieCategoryService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateMovieCategoryDto: UpdateMovieCategoryDto) {
        return this.MovieCategoryService.update(id, UpdateMovieCategoryDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.MovieCategoryService.remove(id);
    }
}
