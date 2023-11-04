import { Module } from '@nestjs/common';

import { UserRepository } from '../users/user.repository';
import { UserModule } from '../users/users.module';
import { CarsController } from './cars.controller';
import { CarsRepository } from './cars.repository';
import { CarsService } from './cars.service';

@Module({
  imports: [UserModule],
  controllers: [CarsController],
  providers: [CarsService, CarsRepository, UserRepository],
  exports: [CarsRepository],
})
export class CarsModule {}
