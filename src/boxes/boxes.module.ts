import { Module } from '@nestjs/common';
import { BoxController } from './boxes.controller';
import { CreateService } from './create/create.service';
import { DeleteService } from './delete/delete.service';
import { ListService } from './list/list.service';

@Module({
  controllers: [BoxController],
  providers: [CreateService, DeleteService, ListService],
})
export class BoxModule {}
