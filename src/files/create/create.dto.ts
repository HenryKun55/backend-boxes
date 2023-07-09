import { IsNotEmpty, IsString } from 'class-validator';
import { File } from 'src/common/entities/file';

export class InputCreateFileDto {
  @IsString()
  @IsNotEmpty()
  boxId: string;
}

export interface OutputCreateFileDto {
  file: File;
}

export interface CreateFile {
  execute(input: InputCreateFileDto): Promise<OutputCreateFileDto>;
}
