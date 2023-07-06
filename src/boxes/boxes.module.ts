import { Module } from '@nestjs/common';
import { BoxController } from './boxes.controller';
import { CreateService } from './create/create.service';

@Module({
  controllers: [BoxController],
  providers: [CreateService],
})
export class BoxModule { }
