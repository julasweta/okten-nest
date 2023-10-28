import { CreateUserDto } from '../request/user-create.request.dto';
export class ResponseCreateUser extends CreateUserDto {
  id: string;
  createdAt: Date;

  updatedAt?: Date;
}
