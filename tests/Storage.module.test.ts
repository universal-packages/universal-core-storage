import { Logger } from '@universal-packages/logger'

import { StorageModule } from '../src'

describe('StorageModule', (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })
    const module = new StorageModule({} as any, logger)

    await module.prepare()
    await module.release()
  })
})
