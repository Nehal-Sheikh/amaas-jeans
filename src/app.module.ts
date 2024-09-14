require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './models/user.entity';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { DataSource, Repository } from 'typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Product } from './models/product.entity';
import { productController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthModule } from './auth/auth.module';
import { NotificationService } from './services/notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Product]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT && 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Product],
      synchronize: true
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    AuthModule,
  ],
  controllers: [AppController, UserController, productController],
  providers: [AppService, UserService, ProductService, NotificationService, JwtStrategy],
})
export class AppModule {}
