import { ExceptionFilter, Catch, NotFoundException, ArgumentsHost } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

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

    // For all other 404s, try to serve index.html for SPA routing
    // Try multiple possible paths for built frontend
    const possiblePaths = [
      path.resolve(__dirname, '../../../dist/apps/kcf/index.html'), // Production build path
      path.resolve(__dirname, '../../kcf/index.html'), // Development path
    ];

    let clientPath: string | null = null;
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        clientPath = p;
        break;
      }
    }

    // Check if the file exists before trying to serve it
    if (!fs.existsSync(clientPath)) {
      // In development, when frontend is served separately
      return response.status(404).json({
        message: 'Frontend not built. Run: npx nx build kcf',
        error: 'Not Found',
        statusCode: 404,
      });
    }

    response.sendFile(clientPath, err => {
      if (err) {
        console.error('Error serving SPA fallback:', err);
        response.status(404).json({
          message: 'SPA index.html not found',
          error: 'Not Found',
          statusCode: 404,
        });
      }
    });
  }
}
