import { Box } from 'src/common/entities/box';

export interface OutputFindByIdBoxDto {
  box: Box;
}

export interface DeleteBox {
  execute(id: string): Promise<OutputFindByIdBoxDto>;
}
