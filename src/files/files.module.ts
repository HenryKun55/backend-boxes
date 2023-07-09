import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { ConsumerFindAllMiddeware } from 'src/common/middleware/consumer.middleware';
import { CreateService } from './create/create.service';
import { FilesController } from './files.controller';

@Module({
  controllers: [FilesController],
  providers: [CreateService, { provide: APP_GUARD, useClass: JwtGuard }],
})
export class FilesModule extends ConsumerFindAllMiddeware {}
