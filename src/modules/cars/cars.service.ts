import { Injectable } from '@nestjs/common';

import { UserRepository } from './../users/user.repository';
import { CarsRepository } from './cars.repository';
import { CreateCarRequestDto } from './dto/request/create-car-request.dto';
import { UpdateCarRequestDto } from './dto/request/update-car-request.dto';
import { carEntity } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    private readonly carRepository: CarsRepository,
    private readonly userRepository: UserRepository,
  ) {}

  public async createCar(
    dto: CreateCarRequestDto,
    param: any,
  ): Promise<carEntity> {
    const user = await this.userRepository.findOneBy({ id: param.id });
    const newCar = this.carRepository.create({ ...dto, user });
    return await this.carRepository.save(newCar);
  }

  findAll() {
    return `This action returns all cars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarRequestDto) {
    console.log(updateCarDto);
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
