import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/models/user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { userName, email, phoneNumber, password } = createUserDto;
    console.log('CreateUserDto:', createUserDto); 

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepository.create({
      userName,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: Partial<CreateUserDto>) {
    if (updateUserDto.password) {
      // Hash the password
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      updateUserDto.password = hashedPassword;
    }
    
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async delete(id: number) {
    await this.userRepository.delete(id);
  }


  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email })
  }
}
