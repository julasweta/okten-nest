import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @Transform(({ value }) => value.trim().toLowerCase().replace(/\s/g, ''))
  @IsString()
  userName: string;

  @Transform(({ value }) => value.trim().toLowerCase().replace(/\s/g, ''))
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @Transform(({ value }) => value.trim())
  @IsOptional() // якщо не обовязковий параметр і плюс знак ?
  @IsString()
  city?: string;

  @IsNumber()
  @IsOptional()
  age: number;

  @IsBoolean()
  @IsOptional()
  status: boolean;
}
