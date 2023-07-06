import { Module } from '@nestjs/common';
import { CreateService } from './create/create.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [CreateService],
})
export class UsersModule { }
