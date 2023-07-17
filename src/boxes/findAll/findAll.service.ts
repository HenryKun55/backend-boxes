import { Injectable } from '@nestjs/common';
import { BoxRepository } from 'src/repository/box.repository';
import { OutputFindAllBoxDto } from './findAll.dto';

@Injectable()
export class FindAllService {
  constructor(private boxRepository: BoxRepository) {}

  async execute(
    id: string,
    take: string = '10',
    skip: string = '0',
  ): Promise<OutputFindAllBoxDto> {
    return await this.boxRepository.findAll(id, take, skip);
  }
}
