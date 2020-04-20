import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideHeaderComponent } from './inside-header.component';

describe('InsideHeaderComponent', () => {
  let component: InsideHeaderComponent;
  let fixture: ComponentFixture<InsideHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
