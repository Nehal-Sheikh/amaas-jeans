// src/user/dto/create-user.dto.ts
import { IsString, IsEmail, Length, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(6, 100)
  @IsNotEmpty()
  password: string;

}