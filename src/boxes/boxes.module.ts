import { Module } from '@nestjs/common';
import { ConsumerFindAllMiddeware } from 'src/common/middleware/consumer.middleware';
import { BoxController } from './boxes.controller';
import { CreateService } from './create/create.service';
import { DeleteService } from './delete/delete.service';
import { FindAllService } from './findAll/findAll.service';
import { FindByIdService } from './findById/findById.service';
import { UpdateService } from './update/update.service';

@Module({
  controllers: [BoxController],
  providers: [
    CreateService,
    DeleteService,
    FindByIdService,
    FindAllService,
    UpdateService,
  ],
})
export class BoxModule extends ConsumerFindAllMiddeware {}
