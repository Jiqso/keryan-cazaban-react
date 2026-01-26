import { Module } from '@nestjs/common';
import { HomepageController } from '../controller/homepage.controller';
import { HomepageService } from '../services/homepage.service';

@Module({
  exports: [],
  controllers: [HomepageController],
  providers: [HomepageService],
})
export class HomepageModule {}
