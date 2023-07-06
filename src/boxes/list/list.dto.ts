import { IsNotEmpty, IsString } from 'class-validator';
import { Box } from 'src/common/entities/box';

export class InputListBoxDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export interface OutputListBoxDto {
  boxes: Box[];
}

export interface DeleteBox {
  execute(input: InputListBoxDto): Promise<OutputListBoxDto>;
}
