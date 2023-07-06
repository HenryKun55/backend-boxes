import { File } from './file';

export interface Box {
  id: string;
  name: string;
  files?: File[];
  userId: string;
}
