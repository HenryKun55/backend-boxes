import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { InputCreateUserDto, OutputCreateUserDto } from './create/create.dto';
import { CreateService } from './create/create.service';

@Controller('users')
export class UsersController {
  constructor(private createSerice: CreateService) { }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  save(@Body() input: InputCreateUserDto): Promise<OutputCreateUserDto> {
    return this.createSerice.execute(input);
  }
}
