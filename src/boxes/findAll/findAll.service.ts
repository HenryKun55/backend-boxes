import { Injectable } from '@nestjs/common';
import { BoxRepository } from 'src/repository/box.repository';
import { OutputFindAllBoxDto } from './findAll.dto';

@Injectable()
export class FindAllService {
  constructor(private boxRepository: BoxRepository) {}

  async execute(id: string): Promise<OutputFindAllBoxDto> {
    const boxes = await this.boxRepository.findAll(id);
    return { boxes };
  }
}
