import { UpdateUserDto } from './dto/request/user-update.request.dto';
import { ResponseCreateUser } from './dto/response/user-create-response.dto';
import { UserEntity } from './entities/user.entity';

export class UserResponseMapper {
  static toCreatesRes(data: UserEntity): ResponseCreateUser {
    return {
      id: data.id,
      userName: data.userName,
      email: data.email,
      city: data.city,
      age: data.age,
      status: data.status,
      createdAt: data.createdAt,
    };
  }
  static toUpdateRes(data: Partial<UpdateUserDto>): UpdateUserDto {
    return {
      userName: data.userName,
      city: data.city,
      age: data.age,
    };
  }
}
