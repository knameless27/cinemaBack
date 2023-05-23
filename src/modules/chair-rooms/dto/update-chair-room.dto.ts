import { PartialType } from '@nestjs/mapped-types';
import { CreateChairRoomDto } from './create-chair-room.dto';

export class UpdateChairRoomDto extends PartialType(CreateChairRoomDto) {}
