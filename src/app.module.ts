import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

import { CustomConfigModule } from './config/config.module';
import { CustomConfigService } from './config/config.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/users.module';

@Module({
  imports: [
    CustomConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [CustomConfigModule],
      useFactory: (customConfigService: CustomConfigService) => {
        return {
          type: 'postgres',
          host: customConfigService.db_host,
          port: customConfigService.db_port,
          username: customConfigService.db_username,
          password: customConfigService.db_password,
          database: customConfigService.db_database,
          synchronize: true,
          entities: [
            path.join(__dirname, '**', 'entities', '**', '*.entity{.ts,.js}'),
          ],
        };
      },
      inject: [CustomConfigService],
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
