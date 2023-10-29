import { populateTemplates } from '@universal-packages/template-populator'

import StorageTask from '../src/Storage.universal-core-task'

jest.mock('@universal-packages/template-populator')

describe(StorageTask, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    await jestCore.execTask('storage-task', {
      directive: 'init',

      args: { f: true },
      coreConfigOverride: {
        config: { location: './tests/__fixtures__/config' },
        modules: { location: './tests/__fixtures__' },
        tasks: { location: './tests/__fixtures__' },
        logger: { silence: true }
      }
    })

    expect(populateTemplates).toHaveBeenCalledWith(expect.stringMatching(/universal-core-storage\/src\/template/), './src', { override: true })
  })

  it('throws an error if directive is not recognized', async (): Promise<void> => {
    await expect(
      jestCore.execTask('storage-task', {
        directive: 'nop',

        args: { f: true },
        coreConfigOverride: {
          config: { location: './tests/__fixtures__/config' },
          modules: { location: './tests/__fixtures__' },
          tasks: { location: './tests/__fixtures__' },
          logger: { silence: true }
        }
      })
    ).rejects.toThrow('Unrecognized directive nop')
  })
})
