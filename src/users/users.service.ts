import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userDto: CreateUserDto) {
    const userEmail = userDto.email.trim(); // перевіряємо пропуски
    const findUser = await this.userRepository.findOne({
      // перевіряємо чи є вже такий юзер
      where: { email: userEmail },
    });
    if (findUser) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }
    try {
      const newUser = this.userRepository.create(userDto);
      if (!userDto.status) {
        //на етапі створення якщо немає в юзера міста, додємо йому місто, або дописуємо токени
        newUser.status = true;
      }
      return this.userRepository.save(newUser);
    } catch (err) {
      throw new HttpException('Create user failed', HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
