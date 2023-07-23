import { Module } from '@nestjs/common';
import { ConsumerFindAllMiddeware } from 'src/common/middleware/consumer.middleware';
import { CreateService } from './create/create.service';
import { DeleteService } from './delete/delete.service';
import { FilesController } from './files.controller';

@Module({
  controllers: [FilesController],
  providers: [CreateService, DeleteService],
})
export class FilesModule extends ConsumerFindAllMiddeware { }
