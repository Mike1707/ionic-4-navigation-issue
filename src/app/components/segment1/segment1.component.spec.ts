import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Segment1Page } from './segment1.page';

describe('Segment1Page', () => {
  let component: Segment1Page;
  let fixture: ComponentFixture<Segment1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Segment1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Segment1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
