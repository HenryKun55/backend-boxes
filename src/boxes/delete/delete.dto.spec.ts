import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { DeleteService } from './delete.service';

describe('DeleteService', () => {
  let service: DeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<DeleteService>(DeleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
