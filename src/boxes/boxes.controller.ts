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
import { InputDeleteBoxDto } from './delete/delete.dto';
import { DeleteService } from './delete/delete.service';

@Controller('box')
export class BoxController {
  constructor(
    private createSerice: CreateService,
    private deleteService: DeleteService,
  ) {}

  @UseGuards(JwtGuard)
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  save(
    @UserId() userId: string,
    @Body() input: InputCreateBoxDto,
  ): Promise<OutputCreateBoxDto> {
    return this.createSerice.execute(userId, input);
  }

  @UseGuards(JwtGuard)
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  delete(@Body() input: InputDeleteBoxDto): Promise<void> {
    return this.deleteService.execute(input);
  }
}
