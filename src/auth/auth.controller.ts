import { Body, Controller, Get, Post } from "@nestjs/common";
import { LoginDto } from "src/dto/login.dto";
import { authService } from "./auth.service"; 

@Controller('auth')
export class authController {
    constructor(private readonly authService: authService) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    // @Post('signup')
    // async signup() {
    //     return 'Auth signup'
    // }

    // @Post('forgot')
    // async forgot() {
    //     return 'Auth forgot'
    // }

}