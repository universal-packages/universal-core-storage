import { Logger } from '@universal-packages/logger'
import { populateTemplates } from '@universal-packages/template-populator'
import StorageTask from '../src/Storage.universal-core-task'

jest.mock('@universal-packages/template-populator')

describe('StorageTask', (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })

    let task = new StorageTask('init', [], {}, logger)
    await task.exec()
    expect(populateTemplates).toHaveBeenCalled()
  })
})
