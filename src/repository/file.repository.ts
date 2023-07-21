import { Injectable } from '@nestjs/common';
import { File } from 'src/common/entities/file';
import { IFileRepository } from './interfaces/file.repository';
import { PrismaService } from './prisma.service';

@Injectable()
export class FileRepository implements IFileRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.files.findUnique({ where: { id } });
  }

  async list(boxId: string): Promise<File[]> {
    return this.prisma.files.findMany({ where: { boxId } });
  }

  async save(input: File): Promise<File> {
    const newFile = await this.prisma.files.create({
      data: {
        name: input.name,
        path: input.path,
        ext: input.ext,
        size: input.size,
        boxId: input.boxId,
      },
    });

    return newFile;
  }

  async delete(fileId: string): Promise<void> {
    this.prisma.files.delete({ where: { id: fileId } });
    return;
  }
}
