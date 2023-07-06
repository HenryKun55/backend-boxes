import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { PagerMiddleware } from './pager.middleware';

export class ConsumerFindAllMiddeware implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PagerMiddleware)
      .forRoutes({ path: '', method: RequestMethod.GET });
  }
}
