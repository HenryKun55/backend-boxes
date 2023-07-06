import { Injectable } from '@nestjs/common';
import { BoxRepository } from 'src/repository/box.repository';

@Injectable()
export class DeleteService {
  constructor(private boxRepository: BoxRepository) {}

  async execute(id: string): Promise<void> {
    return await this.boxRepository.delete(id);
  }
}
