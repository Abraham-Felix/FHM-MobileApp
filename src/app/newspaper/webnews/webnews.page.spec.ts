import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebnewsPage } from './webnews.page';

describe('WebnewsPage', () => {
  let component: WebnewsPage;
  let fixture: ComponentFixture<WebnewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebnewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
