import { Box } from 'src/common/entities/box';

export interface OutputFindAllBoxDto {
  boxes: Box[];
}

export interface DeleteBox {
  execute(id: string): Promise<OutputFindAllBoxDto>;
}
