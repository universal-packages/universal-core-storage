import { CoreInitializer } from '@universal-packages/core'

export default class StorageInitializer extends CoreInitializer {
  public static readonly initializerName = 'storage'
  public static readonly description: string = 'Core Storage initializer'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
