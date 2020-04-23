import { TestBed } from '@angular/core/testing';

import { PostsTopicsService } from './posts-topics.service';

describe('PostsTopicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsTopicsService = TestBed.get(PostsTopicsService);
    expect(service).toBeTruthy();
  });
});
