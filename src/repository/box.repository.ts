import { Injectable } from '@nestjs/common';
import { InputUpdateBoxDto } from 'src/boxes/update/update.dto';
import { Paginated } from 'src/common/@types/pagination';
import { Box } from 'src/common/entities/box';
import { IBoxRepository } from './interfaces/box.repository';
import { PrismaService } from './prisma.service';

@Injectable()
export class BoxRepository implements IBoxRepository {
  constructor(private prisma: PrismaService) { }

  async findByName(name: string) {
    return this.prisma.box.findUnique({
      where: { name },
    });
  }

  async findById(id: string) {
    return this.prisma.box.findUnique({
      where: { id },
      include: { files: true },
    });
  }

  async findAll(
    userId: string,
    take: string,
    skip: string,
  ): Promise<Paginated<Box>> {
    const count = await this.prisma.box.count({ where: { userId } });
    const box = await this.prisma.box.findMany({
      where: { userId },
      include: { _count: { select: { files: true } } },
      take: Number(take),
      skip: Number(skip),
    });
    return {
      data: box,
      count,
    };
  }

  async save(input: Box): Promise<Box> {
    const newBox = await this.prisma.box.create({
      data: {
        name: input.name,
        userId: input.userId,
      },
    });

    return newBox;
  }

  async delete(boxId: string): Promise<void> {
    await this.prisma.box.delete({ where: { id: boxId } });
    return;
  }

  async update(id: string, input: InputUpdateBoxDto): Promise<void> {
    await this.prisma.box.update({
      where: { id },
      data: { ...input },
    });
    return;
  }
}
