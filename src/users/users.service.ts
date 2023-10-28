import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/request/user-create.request.dto';
import { UpdateUserDto } from './dto/request/user-update.request.dto';
import { UserRepository } from './user.repository';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

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
    return this.userRepository.save(newUser);
  }

  async getUserById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new UnprocessableEntityException('User not found');
    }
    return user;
  }

  async findAll(): Promise<any> {
    return this.userRepository.count();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update('age', updateUserDto);
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
