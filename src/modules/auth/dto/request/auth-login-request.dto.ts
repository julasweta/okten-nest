import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthLoginRequestDto {
  @Transform(({ value }) => value.trim().toLowerCase().replace(/\s/g, ''))
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  password: string;
}
