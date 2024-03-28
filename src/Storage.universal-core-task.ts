import { CoreTask } from '@universal-packages/core'
import { populateTemplates } from '@universal-packages/template-populator'
import path from 'path'

export default class StorageTask extends CoreTask {
  public static readonly taskName = 'storage-task'
  public static readonly description = 'Storage related tasks'

  public async exec(): Promise<void> {
    switch (this.directive) {
      case 'init':
        await populateTemplates(path.resolve(__dirname, 'template'), './src', { override: this.args.f })

        this.logger.log({ level: 'INFO', title: 'Storage template initialized' })
        break
      default:
        throw new Error(`Unrecognized directive ${this.directive}`)
    }
  }
}
