import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import * as path from 'path';

@Injectable()
export class SpaFallbackMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Don't serve index.html for API routes or static assets
    if (
      req.path.startsWith('/api') ||
      req.path.includes('.') || // Files with extensions
      req.path.startsWith('/node_modules')
    ) {
      return next();
    }

    // For all other routes, serve index.html (SPA fallback)
    const clientPath = path.resolve(__dirname, '../../kcf/index.html');
    res.sendFile(clientPath, err => {
      if (err) {
        next();
      }
    });
  }
}
