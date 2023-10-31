import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/request/user-create.request.dto';
import { UserListQueryRequestDto } from './dto/request/user-list-query.request.dto';
import { UpdateUserDto } from './dto/request/user-update.request.dto';
import { UserUpdateResponse } from './dto/response/user-update-response.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { UserResponseMapper } from './user.response.mapper';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getdAll(query: UserListQueryRequestDto): Promise<any> {
    return await this.userRepository.getAllUsers(query);
  }

  async createUser(userData: CreateUserDto) {
    const findUser = await this.userRepository.findOneBy({
      email: userData.email,
    });
    if (findUser) {
      throw new BadRequestException('User already exist');
    }
    const newUser = this.userRepository.create(userData);
    if (!userData.status) {
      //на етапі створення додаємо дані або дописуємо токени
      newUser.status = true;
    }
    return await this.userRepository.save(newUser);
  }

  async getUserById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  async updateUser(
    id: string,
    dto: UpdateUserDto,
  ): Promise<UserUpdateResponse> {
    const user = await this.userRepository.findOneBy({ id: id });
    if (dto.email) {
      throw new UnprocessableEntityException('Email can`t to change');
    }
    const newUser = UserResponseMapper.toUpdateRes(dto);
    this.userRepository.merge(user, newUser);
    return await this.userRepository.save(user);
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.findOneBy({ id: id });
    await this.userRepository.delete({ id: id });
    if (!user) {
      throw new UnprocessableEntityException('User not found');
    }
    return `Delete userName:  ${user.userName}`;
  }
}
