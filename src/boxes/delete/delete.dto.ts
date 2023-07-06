import { IsNotEmpty, IsString } from 'class-validator';

export class InputDeleteBoxDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export interface DeleteBox {
  execute(input: InputDeleteBoxDto): Promise<void>;
}
