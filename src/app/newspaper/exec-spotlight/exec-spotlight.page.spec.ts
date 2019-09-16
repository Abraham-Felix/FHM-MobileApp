import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecSpotlightPage } from './exec-spotlight.page';

describe('ExecSpotlightPage', () => {
  let component: ExecSpotlightPage;
  let fixture: ComponentFixture<ExecSpotlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecSpotlightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecSpotlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
