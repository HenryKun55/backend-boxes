import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ProfileService } from './profile/profile.service';
import { SignInService } from './sign-in/sign-in.service';

@Module({
  controllers: [AuthController],
  providers: [SignInService, ProfileService],
})
export class AuthModule {}
