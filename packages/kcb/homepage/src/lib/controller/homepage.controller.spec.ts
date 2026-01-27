import { Test, TestingModule } from '@nestjs/testing';
import { HomepageController } from './homepage.controller';
import { HomepageService } from '../services/homepage.service';

describe('HomepageController', () => {
  let controller: HomepageController;
  let service: HomepageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomepageController],
      providers: [
        {
          provide: HomepageService,
          useValue: {
            // Mock the methods that your controller uses
            // For example:
            // getHomepage: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<HomepageController>(HomepageController);
    service = module.get<HomepageService>(HomepageService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
