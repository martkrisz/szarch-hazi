import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByTableComponent } from './order-by-table.component';

describe('OrderByTableComponent', () => {
  let component: OrderByTableComponent;
  let fixture: ComponentFixture<OrderByTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderByTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
