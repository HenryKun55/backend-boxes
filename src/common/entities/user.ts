import { Box } from './box';

export interface User {
  id: string;
  username: string;
  password: string;
  is_deleted?: boolean;
  boxes?: Box[];
}
