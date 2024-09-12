import { TestBed } from '@angular/core/testing';

import { BotFeedbackService } from './bot-feedback.service';

describe('BotFeedbackService', () => {
  let service: BotFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
