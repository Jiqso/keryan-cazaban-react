import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarketplaceService } from '../services/marketplace.service';
import { MarketplaceDto } from '../dto/marketplace.dto';

@Controller('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  // Add your marketplace API endpoints here
  // Example: @Get('products'), @Post('create'), etc.
}
