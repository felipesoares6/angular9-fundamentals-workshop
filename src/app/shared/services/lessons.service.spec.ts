import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LessonsService } from './lessons.service';

describe('LessonsService', () => {
  let service: LessonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LessonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
