import { ExceptionFilter, Catch, NotFoundException, ArgumentsHost } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'path';

@Catch(NotFoundException)
export class SpaFallbackFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();

    // Don't serve index.html for API routes
    if (request.path.startsWith('/api')) {
      return response.status(404).json({
        message: 'Cannot ' + request.method + ' ' + request.path,
        error: 'Not Found',
        statusCode: 404,
      });
    }

    // For all other 404s, serve index.html for SPA routing
    const clientPath = path.resolve(__dirname, '../../kcf/index.html');
    response.sendFile(clientPath);
  }
}
