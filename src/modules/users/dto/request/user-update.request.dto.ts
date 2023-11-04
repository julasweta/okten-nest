import { PickType } from '@nestjs/swagger';

import { UserBaseDto } from '../user.base.dto';

export class UpdateUserDto extends PickType(UserBaseDto, [
  'userName',
  'city',
  'age',
  'email',
  'status',
]) {}
