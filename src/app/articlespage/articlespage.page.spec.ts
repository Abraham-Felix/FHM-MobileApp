import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlespagePage } from './articlespage.page';

describe('ArticlespagePage', () => {
  let component: ArticlespagePage;
  let fixture: ComponentFixture<ArticlespagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlespagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlespagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
