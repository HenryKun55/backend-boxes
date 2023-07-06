import { InputCreateBoxDto } from 'src/boxes/create/create.dto';
import { InputUpdateBoxDto } from 'src/boxes/update/update.dto';
import { Box } from 'src/common/entities/box';

export interface IBoxRepository {
  findById(userId: string): Promise<Box>;
  list(userId: string): Promise<Box[]>;
  save(input: InputCreateBoxDto): Promise<Box>;
  delete(boxId: string): Promise<void>;
  update(id: string, input: InputUpdateBoxDto): Promise<void>;
}
