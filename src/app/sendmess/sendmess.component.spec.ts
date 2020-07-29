import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmessComponent } from './sendmess.component';

describe('SendmessComponent', () => {
  let component: SendmessComponent;
  let fixture: ComponentFixture<SendmessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
