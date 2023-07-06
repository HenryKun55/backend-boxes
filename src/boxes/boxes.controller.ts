import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserId } from 'src/common/decorators/user-id.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { InputCreateBoxDto, OutputCreateBoxDto } from './create/create.dto';
import { CreateService } from './create/create.service';

@Controller('box')
export class BoxController {
  constructor(private createSerice: CreateService) {}

  @UseGuards(JwtGuard)
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  save(
    @UserId() userId: string,
    @Body() input: InputCreateBoxDto,
  ): Promise<OutputCreateBoxDto> {
    return this.createSerice.execute(userId, input);
  }
}
