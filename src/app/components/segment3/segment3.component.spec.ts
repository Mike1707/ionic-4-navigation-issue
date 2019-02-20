import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Segment3Page } from './segment3.page';

describe('Segment3Page', () => {
  let component: Segment3Page;
  let fixture: ComponentFixture<Segment3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Segment3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Segment3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
