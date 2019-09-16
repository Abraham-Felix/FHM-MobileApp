import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveNewsPage } from './executive-news.page';

describe('ExecutiveNewsPage', () => {
  let component: ExecutiveNewsPage;
  let fixture: ComponentFixture<ExecutiveNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
