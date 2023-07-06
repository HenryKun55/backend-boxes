import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserId } from 'src/common/decorators/user-id.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { InputCreateBoxDto, OutputCreateBoxDto } from './create/create.dto';
import { CreateService } from './create/create.service';
import { DeleteService } from './delete/delete.service';
import { InputListBoxDto, OutputListBoxDto } from './list/list.dto';
import { ListService } from './list/list.service';

@Controller('box')
export class BoxController {
  constructor(
    private createSerice: CreateService,
    private deleteService: DeleteService,
    private listService: ListService,
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
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string): Promise<void> {
    return this.deleteService.execute(id);
  }

  @UseGuards(JwtGuard)
  @Get('')
  @HttpCode(HttpStatus.OK)
  list(@UserId() input: InputListBoxDto): Promise<OutputListBoxDto> {
    return this.listService.execute(input);
  }
}
