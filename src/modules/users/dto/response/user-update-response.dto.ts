import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UserUpdateResponse {
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  userName?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  city?: string;

  @IsNumber()
  @IsOptional()
  age?: number;
}
