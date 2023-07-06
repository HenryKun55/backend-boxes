import { Injectable } from '@nestjs/common';
import { BoxRepository } from 'src/repository/box.repository';
import { InputListBoxDto, OutputListBoxDto } from './list.dto';

@Injectable()
export class ListService {
  constructor(private boxRepository: BoxRepository) {}

  async execute(input: InputListBoxDto): Promise<OutputListBoxDto> {
    const boxes = await this.boxRepository.list(input.id);
    return { boxes };
  }
}
