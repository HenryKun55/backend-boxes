import { Module } from '@nestjs/common';
import { ConsumerFindAllMiddeware } from 'src/common/middleware/consumer.middleware';
import { CreateService } from './create/create.service';
import { FilesController } from './files.controller';

@Module({
  controllers: [FilesController],
  providers: [CreateService],
})
export class FilesModule extends ConsumerFindAllMiddeware {}
