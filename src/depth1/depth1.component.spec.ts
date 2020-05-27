import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Depth1Component } from './depth1.component';

describe('Depth1Component', () => {
  let component: Depth1Component;
  let fixture: ComponentFixture<Depth1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Depth1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Depth1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
