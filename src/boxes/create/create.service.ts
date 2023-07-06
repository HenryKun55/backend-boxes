import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Box } from 'src/common/entities/box';
import { BoxRepository } from 'src/repository/box.repository';
import { InputCreateBoxDto, OutputCreateBoxDto } from './create.dto';

@Injectable()
export class CreateService {
  constructor(private BoxRepository: BoxRepository) {}

  async execute(
    userId: string,
    input: InputCreateBoxDto,
  ): Promise<OutputCreateBoxDto> {
    const newBox: Box = {
      id: randomUUID(),
      name: input.name,
      userId,
    };
    const box = await this.BoxRepository.save(newBox);
    return { boxId: box.id };
  }
}
