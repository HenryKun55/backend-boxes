import { Global, Module, Provider } from '@nestjs/common';
import { BoxRepository } from './box.repository';
import { PrismaService } from './prisma.service';
import { UserRepository } from './user.repository';

const providers: Provider[] = [
  PrismaService,
  {
    provide: UserRepository,
    useClass: UserRepository,
  },
  {
    provide: BoxRepository,
    useClass: BoxRepository,
  },
];

@Global()
@Module({
  providers,
  exports: providers,
})
export class RepositoryModule {}
