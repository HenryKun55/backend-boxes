import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { FindByIdService } from './findById.service';

describe('FindByIdService', () => {
  let service: FindByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<FindByIdService>(FindByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
