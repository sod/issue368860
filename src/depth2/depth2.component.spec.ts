import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Depth2Component } from './depth2.component';

describe('Depth2Component', () => {
  let component: Depth2Component;
  let fixture: ComponentFixture<Depth2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Depth2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Depth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
