import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserId } from 'src/common/decorators/user-id.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { InputCreateBoxDto, OutputCreateBoxDto } from './create/create.dto';
import { CreateService } from './create/create.service';
import { DeleteService } from './delete/delete.service';
import { OutputListBoxDto } from './list/list.dto';
import { ListService } from './list/list.service';
import { InputUpdateBoxDto } from './update/update.dto';
import { UpdateService } from './update/update.service';

@Controller('box')
export class BoxController {
  constructor(
    private createSerice: CreateService,
    private deleteService: DeleteService,
    private listService: ListService,
    private updateService: UpdateService,
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
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  list(@Param('id') id: string): Promise<OutputListBoxDto> {
    return this.listService.execute(id);
  }

  @UseGuards(JwtGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  listAll(@Param('id') id: string): Promise<OutputListBoxDto> {
    return this.listService.execute(id);
  }

  @UseGuards(JwtGuard)
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: string,
    @Body() input: InputUpdateBoxDto,
  ): Promise<void> {
    return this.updateService.execute(id, input);
  }
}
