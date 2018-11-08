import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWaiterComponent } from './register-waiter.component';

describe('RegisterWaiterComponent', () => {
  let component: RegisterWaiterComponent;
  let fixture: ComponentFixture<RegisterWaiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWaiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
