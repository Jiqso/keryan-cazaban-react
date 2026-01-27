import { Body, Controller, Get, Post } from '@nestjs/common';
import { HomepageService } from '../services/homepage.service';
import { ContactDto } from '../dto/contact.dto';

@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get()
  getData() {
    return this.homepageService.getData();
  }

  @Post('contact')
  async sendEmail(@Body() contactDto: ContactDto) {
    return this.homepageService.sendEmail(contactDto);
  }
}
