import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule } from './config/config.module';
import { CustomConfigService } from './config/config.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    CustomConfigModule,
    TypeOrmModule.forRootAsync({
      //підключення до бази данних
      imports: [CustomConfigModule],
      useFactory: (customConfigService: CustomConfigService) => {
        console.log(UserEntity.prototype);
        return {
          type: 'postgres',
          host: customConfigService.db_host,
          port: customConfigService.db_port,
          username: customConfigService.db_username,
          password: customConfigService.db_password,
          database: customConfigService.db_database,
          synchronize: true,
          entities: [UserEntity],
        };
      },
      inject: [CustomConfigService],
    }),
    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
