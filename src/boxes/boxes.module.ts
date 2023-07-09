import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from 'src/common/guards/jwt.guard';
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
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class BoxModule extends ConsumerFindAllMiddeware {}
