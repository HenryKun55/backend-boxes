import { File } from 'src/common/entities/file';

export interface IFileRepository {
  list(boxId: string): Promise<File[]>;
  save(file: File): Promise<File>;
  delete(fileId: string): Promise<void>;
}
