import { CoreModule } from '@seed-core/core.module';

describe('CoreModule', () => {
  let coreModule: CoreModule;

  beforeEach(() => {
    coreModule = new CoreModule();
  });

  it('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });
});
