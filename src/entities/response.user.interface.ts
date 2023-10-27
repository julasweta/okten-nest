import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
export class ResponseCreateUser extends CreateUserDto {
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
}
