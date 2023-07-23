import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerStorage } from 'src/common/multer/multer.service';
import { InputCreateFileDto, OutputCreateFileDto } from './create/create.dto';
import { CreateService } from './create/create.service';
import { DeleteService } from './delete/delete.service';

const THREE_MB = 3145728;

@Controller('files')
export class FilesController {
  constructor(
    private createSerice: CreateService,
    private deleteService: DeleteService,
  ) { }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multerStorage[process.env.MULTER_STORAGE],
    }),
  )
  @HttpCode(HttpStatus.CREATED)
  save(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addMaxSizeValidator({ maxSize: THREE_MB })
        .build({
          exceptionFactory(error) {
            throw new HttpException(error, HttpStatus.UNPROCESSABLE_ENTITY);
          },
        }),
    )
    file: Express.MulterS3.File,
    @Body() input: InputCreateFileDto,
  ): Promise<OutputCreateFileDto> {
    return this.createSerice.execute(file, input);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string): Promise<void> {
    return this.deleteService.execute({ fileId: id });
  }
}
