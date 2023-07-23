import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { File } from 'src/common/entities/file';
import { NotFoundError } from 'src/common/exceptions/not-found.exception';
import { BoxRepository } from 'src/repository/box.repository';
import { FileRepository } from 'src/repository/file.repository';
import { InputCreateFileDto, OutputCreateFileDto } from './create.dto';

@Injectable()
export class CreateService {
  constructor(
    private fileRepository: FileRepository,
    private boxRepository: BoxRepository,
  ) { }

  async execute(
    file: Express.MulterS3.File,
    input: InputCreateFileDto,
  ): Promise<OutputCreateFileDto> {
    const box = await this.boxRepository.findById(input.boxId);
    if (!box) throw new NotFoundError('Box');
    const newFile: File = {
      id: randomUUID(),
      name: file.originalname,
      ext: file.mimetype,
      size: file.size,
      path: file.location,
      boxId: box.id,
    };
    const theFile = await this.fileRepository.save(newFile);
    return { file: theFile };
  }
}
