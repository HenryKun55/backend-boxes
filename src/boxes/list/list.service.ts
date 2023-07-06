import { Injectable } from '@nestjs/common';
import { BoxRepository } from 'src/repository/box.repository';
import { OutputListBoxDto } from './list.dto';

@Injectable()
export class ListService {
  constructor(private boxRepository: BoxRepository) {}

  async execute(id: string): Promise<OutputListBoxDto> {
    const boxes = await this.boxRepository.list(id);
    return { boxes };
  }
}
