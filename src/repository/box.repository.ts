import { Injectable } from '@nestjs/common';
import { InputUpdateBoxDto } from 'src/boxes/update/update.dto';
import { Box } from 'src/common/entities/box';
import { IBoxRepository } from './interfaces/box.repository';
import { PrismaService } from './prisma.service';

@Injectable()
export class BoxRepository implements IBoxRepository {
  constructor(private prisma: PrismaService) {}

  findById(id: string) {
    return this.prisma.boxes.findUnique({ where: { id } });
  }

  list(userId: string): Promise<Box[]> {
    return this.prisma.boxes.findMany({ where: { userId } });
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
