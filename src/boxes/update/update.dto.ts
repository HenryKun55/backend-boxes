import { IsNotEmpty, IsString } from 'class-validator';

export class InputUpdateBoxDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export interface DeleteBox {
  execute(input: InputUpdateBoxDto): Promise<void>;
}
