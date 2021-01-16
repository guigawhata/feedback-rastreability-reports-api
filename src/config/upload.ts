import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import AppError from '@shared/errors/AppError';

export default {
  tmpFolder: path.resolve(__dirname, '..', '..', 'tmp'),
  uploadsFolder: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  async bytesToImage(bytes: string): Promise<string> {
    const buffer = Buffer.from(bytes, 'base64');

    const fileHash = crypto.randomBytes(10).toString('hex');
    const filename = `${
      fileHash +
      crypto.createHash('md5').update(new Date().toString()).digest('hex')
    }.png`;

    fs.writeFile(`./tmp/${filename}`, buffer, err => {
      if (err) {
        throw new AppError(err.message, 500);
      }
    });

    return filename;
  },
};
