import { Injectable } from '@nestjs/common';

@Injectable()
export class HomepageService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
