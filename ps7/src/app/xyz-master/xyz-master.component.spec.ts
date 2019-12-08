import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XyzMasterComponent } from './xyz-master.component';

describe('XyzMasterComponent', () => {
  let component: XyzMasterComponent;
  let fixture: ComponentFixture<XyzMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XyzMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XyzMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
