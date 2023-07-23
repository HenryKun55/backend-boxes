import { IsNotEmpty, IsString } from 'class-validator';

export class InputDeleteFileDto {
  @IsString()
  @IsNotEmpty()
  fileId: string;
}

export interface DeleteFileImpl {
  execute(input: InputDeleteFileDto): Promise<void>;
}
