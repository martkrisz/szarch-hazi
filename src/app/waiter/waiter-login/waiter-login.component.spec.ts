import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterLoginComponent } from './waiter-login.component';

describe('WaiterLoginComponent', () => {
  let component: WaiterLoginComponent;
  let fixture: ComponentFixture<WaiterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
