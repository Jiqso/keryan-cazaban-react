import { Test, TestingModule } from '@nestjs/testing';
import { HomepageService } from './homepage.service';
import { MailerService } from '@nestjs-modules/mailer';

describe('HomepageService', () => {
  let service: HomepageService;
  let mailerService: MailerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HomepageService,
        {
          provide: MailerService,
          useValue: {
            sendMail: jest.fn().mockResolvedValue(true),
            // Add other MailerService methods if needed
          },
        },
      ],
    }).compile();

    service = module.get<HomepageService>(HomepageService);
    mailerService = module.get<MailerService>(MailerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
