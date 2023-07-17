import { Paginated } from 'src/common/@types/pagination';
import { Box } from 'src/common/entities/box';

export interface OutputFindAllBoxDto extends Paginated<Box> {}

export interface DeleteBox {
  execute(id: string): Promise<OutputFindAllBoxDto>;
}
