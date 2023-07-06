import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { FindAllService } from './findAll.service';

describe('FindAllService', () => {
  let service: FindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<FindAllService>(FindAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
