import { Injectable } from '@nestjs/common';
import { InputUpdateBoxDto } from 'src/boxes/update/update.dto';
import { Paginated } from 'src/common/@types/pagination';
import { Box } from 'src/common/entities/box';
import { IBoxRepository } from './interfaces/box.repository';
import { PrismaService } from './prisma.service';

@Injectable()
export class BoxRepository implements IBoxRepository {
  constructor(private prisma: PrismaService) {}

  async findByName(name: string) {
    return this.prisma.boxes.findUnique({
      where: { name },
    });
  }

  async findById(id: string) {
    return this.prisma.boxes.findUnique({
      where: { id },
      include: { files: true },
    });
  }

  async findAll(
    userId: string,
    take: string,
    skip: string,
  ): Promise<Paginated<Box>> {
    const count = await this.prisma.boxes.count({ where: { userId } });
    const boxes = await this.prisma.boxes.findMany({
      where: { userId },
      include: { _count: { select: { files: true } } },
      take: Number(take),
      skip: Number(skip),
    });
    return {
      data: boxes,
      count,
    };
  }

  async save(input: Box): Promise<Box> {
    const newBox = await this.prisma.boxes.create({
      data: {
        name: input.name,
        userId: input.userId,
      },
    });

    return newBox;
  }

  async delete(boxId: string): Promise<void> {
    await this.prisma.boxes.delete({ where: { id: boxId } });
    return;
  }

  async update(id: string, input: InputUpdateBoxDto): Promise<void> {
    await this.prisma.boxes.update({
      where: { id },
      data: { ...input },
    });
    return;
  }
}
