import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'path';

@Controller()
export class SpaFallbackController {
  @Get('*')
  spa(@Res() res: Response) {
    const clientPath = path.resolve(__dirname, '../../kcf/index.html');
    res.sendFile(clientPath);
  }
}
