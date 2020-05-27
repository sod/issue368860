import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Depth3Component } from './depth3.component';

describe('Depth3Component', () => {
  let component: Depth3Component;
  let fixture: ComponentFixture<Depth3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Depth3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Depth3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
