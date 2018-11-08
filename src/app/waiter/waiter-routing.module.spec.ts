import { WaiterRoutingModule } from './waiter-routing.module';

describe('WaiterRoutingModule', () => {
  let waiterRoutingModule: WaiterRoutingModule;

  beforeEach(() => {
    waiterRoutingModule = new WaiterRoutingModule();
  });

  it('should create an instance', () => {
    expect(waiterRoutingModule).toBeTruthy();
  });
});
