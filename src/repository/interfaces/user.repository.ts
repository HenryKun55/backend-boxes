import { User } from 'src/common/entities/user';

export interface IUserRepository {
  findById(id: string): Promise<User>;
  save(user: User): Promise<User>;
}
