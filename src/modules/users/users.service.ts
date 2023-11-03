import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRedisClient, RedisClient } from '@webeleon/nestjs-redis';

//import * as bcrypt from 'bcrypt';
import { AuthService } from '../auth/auth.service';
import { AuthLoginRequestDto } from '../auth/dto/request/auth-login-request.dto';
import { CreateUserDto } from './dto/request/user-create.request.dto';
import { UserListQueryRequestDto } from './dto/request/user-list-query.request.dto';
import { UpdateUserDto } from './dto/request/user-update.request.dto';
import { UserUpdateResponse } from './dto/response/user-update-response.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { UserResponseMapper } from './user.response.mapper';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
    @InjectRedisClient() private redisClient: RedisClient,
  ) {}

  async login(data: AuthLoginRequestDto) {
    const findUser = await this.userRepository.findOne({
      where: { email: data.email },
    });
    if (!findUser) {
      throw new HttpException(
        'Email or password is not correct',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (!(await this.authService.validateUser(data))) {
      throw new HttpException(
        'Email or password is not correct',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const token = await this.authService.createToken({
      id: findUser.id,
    });

    await this.redisClient.setEx(token, 10000, token);
    return { token };
  }

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
