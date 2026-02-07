import { Module } from '@nestjs/common';
import { MarketplaceController } from './controller/marketplace.controller';
import { MarketplaceService } from './services/marketplace.service';

@Module({
  exports: [],
  controllers: [MarketplaceController],
  providers: [MarketplaceService],
})
export class MarketplaceModule {}
