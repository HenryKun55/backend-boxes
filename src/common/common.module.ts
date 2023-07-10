import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { EncryptionService } from './encryption/encryption.service';
import { JwtStrategy } from './token/jwt.strategy';
import { TokenService } from './token/token.service';

@Global()
@Module({
  imports: [ConfigModule, JwtModule.register({})],
  providers: [EncryptionService, TokenService, JwtStrategy],
  exports: [EncryptionService, TokenService],
})
export class CommonModule { }
