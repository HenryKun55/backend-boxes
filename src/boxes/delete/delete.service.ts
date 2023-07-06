import { Injectable } from '@nestjs/common';
import { BoxRepository } from 'src/repository/box.repository';
import { InputDeleteBoxDto } from './delete.dto';

@Injectable()
export class DeleteService {
  constructor(private boxRepository: BoxRepository) {}

  async execute(input: InputDeleteBoxDto): Promise<void> {
    return this.boxRepository.delete(input.id);
  }
}
