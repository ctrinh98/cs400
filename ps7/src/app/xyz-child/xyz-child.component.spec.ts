import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XyzChildComponent } from './xyz-child.component';

describe('XyzChildComponent', () => {
  let component: XyzChildComponent;
  let fixture: ComponentFixture<XyzChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XyzChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XyzChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
