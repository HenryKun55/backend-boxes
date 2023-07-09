import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerStorage } from 'src/common/multer/multer.service';
import { InputCreateFileDto, OutputCreateFileDto } from './create/create.dto';
import { CreateService } from './create/create.service';

@Controller('files')
export class FilesController {
  constructor(private createSerice: CreateService) {}

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
        .addMaxSizeValidator({ maxSize: 300000 })
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
}
