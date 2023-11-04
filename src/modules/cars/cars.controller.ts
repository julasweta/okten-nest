import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CarsService } from './cars.service';
import { CreateCarRequestDto } from './dto/request/create-car-request.dto';
import { UpdateCarRequestDto } from './dto/request/update-car-request.dto';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @ApiOperation({ summary: 'Create new car' })
  @Post(':id')
  async createCar(
    @Body() body: CreateCarRequestDto,
    @Param() param: any,
  ): Promise<any> {
    const result = await this.carsService.createCar(body, param);
    return result;
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarRequestDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
