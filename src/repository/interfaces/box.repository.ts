import { Box } from 'src/common/entities/box';

export interface IBoxRepository {
  findById(userId: string): Promise<Box>;
  list(userId: string): Promise<Box[]>;
  save(box: Box): Promise<Box>;
  delete(boxId: string): Promise<void>;
}
