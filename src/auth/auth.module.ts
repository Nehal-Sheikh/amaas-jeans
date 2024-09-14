import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { authService } from './auth.service';
import { authController } from './auth.controller';
import { JwtStrategy } from 'src/jwt.strategy';
import { UserService } from 'src/services/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [authController],
    providers: [authService, JwtStrategy, UserService],
})
export class AuthModule {}
