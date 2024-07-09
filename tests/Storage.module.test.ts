import { StorageModule } from '../src'

coreJest.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(StorageModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(global.storageSubject).not.toBeUndefined()
    expect(global.storageSubject.options).toEqual({ engine: 'local', engineOptions: { location: './storage' } })
  })
})
