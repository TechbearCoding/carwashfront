import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminView } from './adminView.component';

describe('TimeComponent', () => {
  let component: AdminView;
  let fixture: ComponentFixture<AdminView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
