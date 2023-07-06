import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Box } from 'src/common/entities/box';
import { ExistsError } from 'src/common/exceptions/exists.exception';
import { BoxRepository } from 'src/repository/box.repository';
import { InputCreateBoxDto, OutputCreateBoxDto } from './create.dto';

@Injectable()
export class CreateService {
  constructor(private boxRepository: BoxRepository) {}

  async execute(
    userId: string,
    input: InputCreateBoxDto,
  ): Promise<OutputCreateBoxDto> {
    const hasBoxWithTheSameName = await this.boxRepository.findByName(
      input.name,
    );
    if (hasBoxWithTheSameName) throw new ExistsError('Box');
    const newBox: Box = {
      id: randomUUID(),
      name: input.name,
      userId,
    };
    const box = await this.boxRepository.save(newBox);
    return { boxId: box.id };
  }
}
