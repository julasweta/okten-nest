import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserBaseDto {
  @Transform(({ value }) => value.trim().toLowerCase().replace(/\s/g, ''))
  @IsString()
  userName: string;

  @Transform(({ value }) => value.trim().toLowerCase().replace(/\s/g, ''))
  @IsString()
  password: string;

  @Transform(({ value }) => value.trim().toLowerCase().replace(/\s/g, ''))
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email?: string;

  @Transform(({ value }) => value.trim())
  @IsOptional() // якщо не обовязковий параметр і плюс знак ?
  @IsString()
  city?: string;

  @IsNumber()
  @IsOptional()
  age: number;

  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @IsObject()
  @IsOptional()
  cars?: object;
}
