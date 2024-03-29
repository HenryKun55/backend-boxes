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
  Query,
} from '@nestjs/common';
import { UserId } from 'src/common/decorators/user-id.decorator';
import { InputCreateBoxDto, OutputCreateBoxDto } from './create/create.dto';
import { CreateService } from './create/create.service';
import { DeleteService } from './delete/delete.service';
import { OutputFindAllBoxDto } from './findAll/findAll.dto';
import { FindAllService } from './findAll/findAll.service';
import { OutputFindByIdBoxDto } from './findById/findById.dto';
import { FindByIdService } from './findById/findById.service';
import { InputUpdateBoxDto } from './update/update.dto';
import { UpdateService } from './update/update.service';

@Controller('box')
export class BoxController {
  constructor(
    private createSerice: CreateService,
    private deleteService: DeleteService,
    private findByIdService: FindByIdService,
    private findAllService: FindAllService,
    private updateService: UpdateService,
  ) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  save(
    @UserId() userId: string,
    @Body() input: InputCreateBoxDto,
  ): Promise<OutputCreateBoxDto> {
    return this.createSerice.execute(userId, input);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string): Promise<void> {
    return this.deleteService.execute(id);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  list(@Param('id') id: string): Promise<OutputFindByIdBoxDto> {
    return this.findByIdService.execute(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  listAll(
    @UserId() id: string,
    @Query() { take, skip },
  ): Promise<OutputFindAllBoxDto> {
    return this.findAllService.execute(id, take, skip);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: string,
    @Body() input: InputUpdateBoxDto,
  ): Promise<void> {
    return this.updateService.execute(id, input);
  }
}
