import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsDoneComponent } from './jobs-done.component';

describe('JobsDoneComponent', () => {
  let component: JobsDoneComponent;
  let fixture: ComponentFixture<JobsDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
