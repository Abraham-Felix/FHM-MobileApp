import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivesPage } from './executives.page';

describe('ExecutivesPage', () => {
  let component: ExecutivesPage;
  let fixture: ComponentFixture<ExecutivesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutivesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutivesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
