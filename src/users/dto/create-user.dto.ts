import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

//дані які приходять з запиту
export class CreateUserDto {
  @ApiProperty()
  @IsString()
  userName: string;

  @ApiProperty({ required: true, example: 'userTeast@gamil.com' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: false, example: 'Lviv' })
  @IsOptional()
  @IsString()
  city: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  age: number;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  status: boolean;
}
