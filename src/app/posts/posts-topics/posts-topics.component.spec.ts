import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTopicsComponent } from './posts-topics.component';

describe('PostsTopicsComponent', () => {
  let component: PostsTopicsComponent;
  let fixture: ComponentFixture<PostsTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
