import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomepageModule } from '@packages/kcb/homepage';
import { MarketplaceModule } from '@packages/kcb/marketplace';
import { SpaFallbackFilter } from './spa-fallback.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`apps/kcb/.env`],
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          transport: {
            service: 'Gmail',
            auth: {
              user: configService.get<string>('GMAIL_USER'),
              pass: configService.get<string>('GMAIL_PASSWORD'), // App Password
            },
            // auth: {
            //   type: 'OAuth2',
            //   user: configService.get<string>('GMAIL_USER'),
            //   clientId: configService.get<string>('GMAIL_CLIENT_ID'),
            //   clientSecret: configService.get<string>('GMAIL_CLIENT_SECRET'),
            //   refreshToken: configService.get<string>('GMAIL_REFRESH_TOKEN'),
            //   accessToken: configService.get<string>('GMAIL_ACCESS_TOKEN'),
            // },
          } as any,
        };
      },
    }),
    HomepageModule,
    MarketplaceModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: SpaFallbackFilter,
    },
  ],
})
export class AppModule {}
