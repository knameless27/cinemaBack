import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieClasificationDto } from './create-movie-clasification.dto';

export class UpdateMovieClasificationDto extends PartialType(CreateMovieClasificationDto) {}
