/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import express from 'express';

let cachedApp: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Enable CORS
  app.enableCors({
    origin: configService.get<string>('FRONTEND_URL'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: ${configService.get<string>('HOST_URL')}:${port}`);
}

// Serverless handler for Vercel
async function createVercelApp() {
  if (!cachedApp) {
    const expressApp = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), {
      logger: ['error', 'warn'],
    });

    app.enableCors({
      origin: '*',
      credentials: true,
    });

    await app.init();
    cachedApp = expressApp;
  }
  return cachedApp;
}

// Export for Vercel serverless
export default async (req: any, res: any) => {
  const app = await createVercelApp();
  return app(req, res);
};

if (!process.env.VERCEL) {
  bootstrap();
}
