import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EncryptionService } from 'src/common/encryption/encryption.service';
import { User } from 'src/common/entities/user';
import { ExistsError } from 'src/common/exceptions/exists.exception';
import { UserRepository } from 'src/repository/user.repository';
import { InputCreateUserDto, OutputCreateUserDto } from './create.dto';

@Injectable()
export class CreateService {
  constructor(
    private userRepository: UserRepository,
    private encryptionService: EncryptionService,
  ) {}

  async execute(input: InputCreateUserDto): Promise<OutputCreateUserDto> {
    const userExists = await this.userRepository.findByUsername(input.username);
    if (userExists) {
      throw new ExistsError('User');
    }
    const encryptPassword = await this.encryptionService.encrypt(
      input.password,
    );
    const newUser: User = {
      id: randomUUID(),
      username: input.username,
      password: encryptPassword,
      boxes: [],
    };
    const user = await this.userRepository.save(newUser);
    return {
      userId: user.id,
    };
  }
}
