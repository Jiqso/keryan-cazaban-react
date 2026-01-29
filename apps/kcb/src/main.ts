import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  // Enable CORS
  app.enableCors({
    origin: configService.get<string>('FRONTEND_URL'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = configService.get<number>('PORT') || 3000;

  if (process.env['NX_HOST_ON_HEROKU'] === 'true') {
    const clientPath = path.resolve(__dirname, '../kcf/');
    app.useStaticAssets(clientPath);
    await import('./app/spa-fallback.controller.ts');
  }

  await app.listen(port);
}

bootstrap();
