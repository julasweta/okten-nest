import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './user-create.request.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
