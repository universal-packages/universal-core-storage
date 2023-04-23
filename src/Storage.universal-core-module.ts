import { CoreModule } from '@universal-packages/core'
import { Storage, StorageOptions } from '@universal-packages/storage'

export default class StorageModule extends CoreModule<StorageOptions> {
  public static readonly moduleName = 'storage-module'
  public static readonly description = 'Storage initialization module'

  public subject: Storage

  public async prepare(): Promise<void> {
    this.subject = new Storage(this.config)

    await this.subject.initialize()
  }

  public async release(): Promise<void> {
    await this.subject.release()
  }
}
