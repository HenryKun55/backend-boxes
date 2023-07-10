import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { EncryptionService } from 'src/common/encryption/encryption.service';
import { InvalidCredentialsError } from 'src/common/exceptions/invalid-credentials.exception';
import { TokenService } from 'src/common/token/token.service';
import { InMemoryUserRepository } from 'src/repository/mocks/in-memory-user.respository';
import { UserRepository } from 'src/repository/user.repository';
import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let signInService: SignInService;
  let encryptionService: EncryptionService;
  let userRepository: InMemoryUserRepository;

  beforeEach(async () => {
    userRepository = new InMemoryUserRepository();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SignInService,
        EncryptionService,
        TokenService,
        ConfigService,
        JwtService,
        {
          provide: UserRepository,
          useValue: userRepository,
        },
      ],
    }).compile();
    signInService = module.get<SignInService>(SignInService);
    encryptionService = module.get<EncryptionService>(EncryptionService);
  });

  it("should return the token user's", async () => {
    const password = 'any-password';
    const encryptedPassword = await encryptionService.encrypt(password);
    const user = {
      id: 'any-id',
      username: 'any-username',
      password: encryptedPassword,
      created_at: new Date(),
    };
    userRepository.users.push(user);

    const output = await signInService.execute({
      username: user.username,
      password: password,
    });

    expect(output.token).toBeDefined();
    userRepository.users = [];
  });

  it('should throw error when credentials is invalid', async () => {
    const promise = signInService.execute({
      username: 'any-username',
      password: 'any-password',
    });

    expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });
});
