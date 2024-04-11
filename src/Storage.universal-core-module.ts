import { CoreModule } from '@universal-packages/core'
import { Storage, StorageOptions } from '@universal-packages/storage'

import { LOG_CONFIGURATION } from './LOG_CONFIGURATION'

export default class StorageModule extends CoreModule<StorageOptions> {
  public static readonly moduleName = 'storage-module'
  public static readonly description = 'Storage initialization module'

  public subject: Storage

  public async prepare(): Promise<void> {
    this.subject = new Storage(this.config)

    this.subject.on('store:start', (event) => {
      this.logger.log({ level: 'DEBUG', title: 'File being stored', category: 'STORAGE', metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('store:finish', (event) => {
      this.logger.log({ level: 'QUERY', title: 'File stored', category: 'STORAGE', measurement: event.measurement, metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('store-version:start', (event) => {
      this.logger.log({ level: 'DEBUG', title: 'Version of file being generated and stored', category: 'STORAGE', metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('store-version:finish', (event) => {
      this.logger.log(
        { level: 'QUERY', title: 'Version of file generated and stored', category: 'STORAGE', measurement: event.measurement, metadata: event.payload },
        LOG_CONFIGURATION
      )
    })

    this.subject.on('retrieve:start', (event) => {
      this.logger.log({ level: 'DEBUG', title: 'File being retrieved', category: 'STORAGE', metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('retrieve:finish', (event) => {
      this.logger.log({ level: 'QUERY', title: 'File retrieved', category: 'STORAGE', measurement: event.measurement, metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('retrieve-version:start', (event) => {
      this.logger.log({ level: 'DEBUG', title: 'Version of file being retrieved', category: 'STORAGE', metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('retrieve-version:finish', (event) => {
      this.logger.log({ level: 'QUERY', title: 'Version of file retrieved', category: 'STORAGE', measurement: event.measurement, metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('retrieve-stream:start', (event) => {
      this.logger.log({ level: 'DEBUG', title: 'File being retrieved from stream', category: 'STORAGE', metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('retrieve-stream:finish', (event) => {
      this.logger.log({ level: 'QUERY', title: 'File retrieved from stream', category: 'STORAGE', measurement: event.measurement, metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('retrieve-version-stream:start', (event) => {
      this.logger.log({ level: 'DEBUG', title: 'Version of file being retrieved from stream', category: 'STORAGE', metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('retrieve-version-stream:finish', (event) => {
      this.logger.log(
        { level: 'QUERY', title: 'Version of file retrieved from stream', category: 'STORAGE', measurement: event.measurement, metadata: event.payload },
        LOG_CONFIGURATION
      )
    })

    this.subject.on('retrieve-uri:start', (event) => {
      this.logger.log({ level: 'DEBUG', title: 'File being retrieved from URI', category: 'STORAGE', metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('retrieve-uri:finish', (event) => {
      this.logger.log({ level: 'QUERY', title: 'File retrieved from URI', category: 'STORAGE', measurement: event.measurement, metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('retrieve-version-uri:start', (event) => {
      this.logger.log({ level: 'DEBUG', title: 'Version of file being retrieved from URI', category: 'STORAGE', metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('retrieve-version-uri:finish', (event) => {
      this.logger.log(
        { level: 'QUERY', title: 'Version of file retrieved from URI', category: 'STORAGE', measurement: event.measurement, metadata: event.payload },
        LOG_CONFIGURATION
      )
    })

    this.subject.on('dispose:start', (event) => {
      this.logger.log({ level: 'DEBUG', title: 'File being disposed', category: 'STORAGE', metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('dispose:finish', (event) => {
      this.logger.log({ level: 'QUERY', title: 'File disposed', category: 'STORAGE', measurement: event.measurement, metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('dispose-version:start', (event) => {
      this.logger.log({ level: 'DEBUG', title: 'Version of file being disposed', category: 'STORAGE', metadata: event.payload }, LOG_CONFIGURATION)
    })

    this.subject.on('dispose-version:finish', (event) => {
      this.logger.log({ level: 'QUERY', title: 'Version of file disposed', category: 'STORAGE', measurement: event.measurement, metadata: event.payload }, LOG_CONFIGURATION)
    })

    await this.subject.prepare()
  }

  public async release(): Promise<void> {
    await this.subject.release()
  }
}
