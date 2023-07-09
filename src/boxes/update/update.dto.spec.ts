import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { UpdateService } from './update.service';

describe('UpdateService', () => {
  let service: UpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<UpdateService>(UpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
