import { Injectable } from '@nestjs/common';
import { BoxRepository } from 'src/repository/box.repository';
import { InputUpdateBoxDto } from './update.dto';

@Injectable()
export class UpdateService {
  constructor(private boxRepository: BoxRepository) {}

  async execute(id: string, input: InputUpdateBoxDto): Promise<void> {
    await this.boxRepository.update(id, input);
    return;
  }
}
