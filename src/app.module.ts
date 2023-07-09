import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';
import { BoxModule } from './boxes/boxes.module';
import { CommonModule } from './common/common.module';
import { MulterConfigService } from './common/multer/multer.service';
import { FilesModule } from './files/files.module';
import { RepositoryModule } from './repository/repository.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RepositoryModule,
    CommonModule,
    MulterModule.registerAsync({ useClass: MulterConfigService }),
    AuthModule,
    UsersModule,
    BoxModule,
    FilesModule,
  ],
})
export class AppModule {}
