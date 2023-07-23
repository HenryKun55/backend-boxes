import { Injectable } from '@nestjs/common';
import { FileRepository } from 'src/repository/file.repository';
import { DeleteFileImpl, InputDeleteFileDto } from './delete.dto';

@Injectable()
export class DeleteService implements DeleteFileImpl {
  constructor(private fileRepository: FileRepository) { }

  async execute(input: InputDeleteFileDto): Promise<void> {
    return await this.fileRepository.delete(input.fileId);
  }
}
