import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomepageModule } from '@packages/kcb/homepage';
import { MarketplaceModule } from '@packages/kcb/marketplace';

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
  providers: [AppService],
})
export class AppModule {}
