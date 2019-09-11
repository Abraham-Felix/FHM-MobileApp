import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperPage } from './newspaper.page';

describe('NewspaperPage', () => {
  let component: NewspaperPage;
  let fixture: ComponentFixture<NewspaperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspaperPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
