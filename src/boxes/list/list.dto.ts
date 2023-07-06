import { Box } from 'src/common/entities/box';

export interface OutputListBoxDto {
  boxes: Box[];
}

export interface DeleteBox {
  execute(id: string): Promise<OutputListBoxDto>;
}
