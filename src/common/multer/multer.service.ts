import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import { randomUUID } from 'crypto';
import * as multer from 'multer';
import { S3Client } from '@aws-sdk/client-s3';
import * as multerS3 from 'multer-s3';

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY,
  },
});

export const multerDest = './upload/files';

export const multerStorage = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, multerDest);
    },
    filename: (req, file, cb) => {
      file.filename = `${randomUUID()}-${file.originalname}`;
      cb(null, file.filename);
    },
  }),
  s3: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (_request, file, cb) => {
      cb(null, `${randomUUID()}-${file.originalname}`);
    },
  }),
};

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      dest: multerDest,
      storage: multerStorage[process.env.MULTER_STORAGE],
    };
  }
}
