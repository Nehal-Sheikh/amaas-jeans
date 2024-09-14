import { Injectable } from "@nestjs/common";
import { UserService } from "src/services/user.service";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "src/dto/login.dto";
import { User } from "src/models/user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class authService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(loginDto: LoginDto) {
		if(!loginDto.email || !loginDto.password){
			return 'Please Enter Email and Password'
		}

    const user: any = await this.userService.findByEmail(loginDto.email);
    if(user) {
			const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
			if(!isPasswordValid){
				return 'Invalid Password'
			}
      const payload = {id: user.id, email: user.email, pasword: user.password}

      return {
        access_token: await this.jwtService.signAsync(payload),
      }
    }
		return 'User Not Found'
    
  }
}