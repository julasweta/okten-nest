import { PickType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { UserBaseDto } from '../user.base.dto';

export class CreateUserDto extends PickType(UserBaseDto, [
  'userName',
  'password',
  'city',
  'age',
  'cars',
  'status',
]) {
  @Transform(({ value }) => value.trim().toLowerCase().replace(/\s/g, ''))
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
