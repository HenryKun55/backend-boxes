import { InputCreateBoxDto } from 'src/boxes/create/create.dto';
import { InputUpdateBoxDto } from 'src/boxes/update/update.dto';
import { Paginated } from 'src/common/@types/pagination';
import { Box } from 'src/common/entities/box';

export interface IBoxRepository {
  findById(id: string): Promise<Box>;
  findAll(userId: string, take: string, skip: string): Promise<Paginated<Box>>;
  save(input: InputCreateBoxDto): Promise<Box>;
  delete(boxId: string): Promise<void>;
  update(id: string, input: InputUpdateBoxDto): Promise<void>;
}
