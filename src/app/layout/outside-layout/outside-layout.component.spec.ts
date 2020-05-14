import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideLayoutComponent } from './outside-layout.component';

describe('OutsideLayoutComponent', () => {
  let component: OutsideLayoutComponent;
  let fixture: ComponentFixture<OutsideLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
