import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserId } from 'src/common/decorators/user-id.decorator';
import { Public } from 'src/common/metadata/metadata';
import { ProfileService } from './profile/profile.service';
import { SignInInputDto, SignInOutputDto } from './sign-in/sign-in.dto';
import { SignInService } from './sign-in/sign-in.service';

@Controller('auth')
export class AuthController {
  constructor(
    private profileService: ProfileService,
    private signInService: SignInService,
  ) {}

  @Get('profile')
  profile(@UserId() id: string) {
    return this.profileService.execute({ id });
  }

  @Public()
  @Post('sign-in')
  @HttpCode(HttpStatus.CREATED)
  signIn(@Body() input: SignInInputDto): Promise<SignInOutputDto> {
    return this.signInService.execute(input);
  }
}
