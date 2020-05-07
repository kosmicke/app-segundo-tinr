import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTopicDetailComponent } from './posts-topic-detail.component';

describe('PostsTopicDetailComponent', () => {
  let component: PostsTopicDetailComponent;
  let fixture: ComponentFixture<PostsTopicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsTopicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsTopicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
