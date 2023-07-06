import { Injectable } from '@nestjs/common';
import { BoxRepository } from 'src/repository/box.repository';
import { OutputFindByIdBoxDto } from './findById.dto';

@Injectable()
export class FindByIdService {
  constructor(private boxRepository: BoxRepository) {}

  async execute(id: string): Promise<OutputFindByIdBoxDto> {
    const output = await this.boxRepository.findById(id);
    return { box: output };
  }
}
