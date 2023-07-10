import { User } from 'src/common/entities/user';
import { IUserRepository } from '../interfaces/user.repository';

export class InMemoryUserRepository implements IUserRepository {
  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  users: User[] = [];

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async save(user: User): Promise<User> {
    const theUser = await this.findById(user.id);
    if (theUser) {
      this.users = this.users.map((user) => {
        if (user.id === user.id) {
          return user;
        }
        return user;
      });
    } else {
      this.users.push(user);
    }
    return user;
  }
}
