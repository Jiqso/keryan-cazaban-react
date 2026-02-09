import { Injectable } from '@nestjs/common';
import { MarketplaceDto } from '../dto/marketplace.dto';

@Injectable()
export class MarketplaceService {
  getData(): { message: string } {
    return {
      message: 'Hi, welcome to the marketplace part of the api',
    };
  }
}
