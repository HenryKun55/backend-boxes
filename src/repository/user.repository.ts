import { Injectable } from '@nestjs/common';
import { User } from 'src/common/entities/user';
import { IUserRepository } from './interfaces/user.repository';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) { }

  async findByUsername(username: string): Promise<User> {
    return await this.prisma.users.findUnique({
      where: { username },
    });
  }

  async findById(id: string) {
    return await this.prisma.users.findUnique({
      where: { id },
      include: { boxes: true },
    });
  }

  async save(input: User): Promise<User> {
    const newUser = await this.prisma.users.create({
      data: {
        username: input.username,
        password: input.password,
      },
    });

    return newUser;
  }
}
