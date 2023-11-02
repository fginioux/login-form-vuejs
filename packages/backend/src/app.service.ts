import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): Info {
    return {
      version: '1.0.0',
    };
  }
}

export type Info = {
  version: string;
};
