import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Segment2Page } from './segment2.page';

describe('Segment2Page', () => {
  let component: Segment2Page;
  let fixture: ComponentFixture<Segment2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Segment2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Segment2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
