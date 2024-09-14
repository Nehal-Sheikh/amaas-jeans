import { IsString, IsEmail, Length, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(4, 20)
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(6, 100)
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 15)
  phoneNumber: string;
}