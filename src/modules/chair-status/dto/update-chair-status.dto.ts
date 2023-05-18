import { PartialType } from '@nestjs/mapped-types';
import { CreateChairStatusDto } from './create-chair-status.dto';

export class UpdateChairStatusDto extends PartialType(CreateChairStatusDto) {}
