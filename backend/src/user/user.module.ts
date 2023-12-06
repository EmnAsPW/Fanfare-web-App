import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    UserResolver,
    UserService,
    AuthService,
    JwtService,
    PrismaService,
    ConfigService,
  ],
})
export class UserModule {}
