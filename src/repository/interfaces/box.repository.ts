import { InputCreateBoxDto } from 'src/boxes/create/create.dto';
import { InputUpdateBoxDto } from 'src/boxes/update/update.dto';
import { Box } from 'src/common/entities/box';

export interface IBoxRepository {
  findById(id: string): Promise<Box>;
  findAll(userId: string, take: string, skip: string): Promise<Box[]>;
  save(input: InputCreateBoxDto): Promise<Box>;
  delete(boxId: string): Promise<void>;
  update(id: string, input: InputUpdateBoxDto): Promise<void>;
}
