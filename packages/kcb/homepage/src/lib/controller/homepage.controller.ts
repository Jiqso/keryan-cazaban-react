import { Body, Controller, Get, Post } from '@nestjs/common';
import { HomepageService } from '../services/homepage.service';
import { ContactDto } from '../dto/homepage.dto';

@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Post('contact')
  async sendEmail(@Body() contactDto: ContactDto) {
    return this.homepageService.sendEmail(contactDto);
  }
}
