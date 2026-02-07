import { Module } from '@nestjs/common';
import { HomepageController } from '../lib/controller/homepage.controller';
import { HomepageService } from '../lib/services/homepage.service';

@Module({
  exports: [],
  controllers: [HomepageController],
  providers: [HomepageService],
})
export class HomepageModule {}
