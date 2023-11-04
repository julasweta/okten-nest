import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { carEntity } from './entities/car.entity';

@Injectable()
export class CarsRepository extends Repository<carEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(carEntity, dataSource.manager);
  }
}
