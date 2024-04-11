import { CoreTask } from '@universal-packages/core'
import { sleep } from '@universal-packages/time-measurer'
import fs from 'fs'
import path from 'path'

export default class ExampleTask extends CoreTask {
  public static readonly taskName = 'example-task'
  public static readonly description = 'This task is an example'

  public async prepare(): Promise<void> {
    await sleep(1000)
  }

  public async exec(): Promise<void> {
    const key = await storageSubject.store({ name: 'example', data: fs.readFileSync('./example/files/test.128.png') })
    await storageSubject.storeVersion(key, { width: 16 })
    await storageSubject.retrieve(key)
    await storageSubject.retrieveVersion(key, { width: 16 })

    const stream = await storageSubject.retrieveStream(key)

    await new Promise((resolve, reject) => {
      stream.on('data', () => {})
      stream.on('end', resolve)
      stream.on('error', reject)
    })

    const versionStream = await storageSubject.retrieveVersionStream(key, { width: 16 })

    await new Promise((resolve, reject) => {
      versionStream.on('data', () => {})
      versionStream.on('end', resolve)
      versionStream.on('error', reject)
    })

    await storageSubject.retrieveUri(key)
    await storageSubject.retrieveVersionUri(key, { width: 16 })

    await storageSubject.disposeVersion(key, { width: 16 })
    await storageSubject.dispose(key)
  }

  public async abort(): Promise<void> {}

  public async release(): Promise<void> {
    await sleep(1000)
  }
}
