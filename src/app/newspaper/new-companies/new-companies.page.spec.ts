import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompaniesPage } from './new-companies.page';

describe('NewCompaniesPage', () => {
  let component: NewCompaniesPage;
  let fixture: ComponentFixture<NewCompaniesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCompaniesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompaniesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
