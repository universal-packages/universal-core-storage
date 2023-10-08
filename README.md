# Core Storage

[![npm version](https://badge.fury.io/js/@universal-packages%2Fcore-storage.svg)](https://www.npmjs.com/package/@universal-packages/core-storage)
[![Testing](https://github.com/universal-packages/universal-core-storage/actions/workflows/testing.yml/badge.svg)](https://github.com/universal-packages/universal-core-storage/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/universal-packages/universal-core-storage/branch/main/graph/badge.svg?token=CXPJSN8IGL)](https://codecov.io/gh/universal-packages/universal-core-storage)

[Storage](https://github.com/universal-packages/universal-storage) universal-core module abstraction.

## Install

```shell
npm install @universal-packages/core-storage
```

## Initialization

```shell
ucore exec storage-task init
```

## Global

Core expose `Storage` as the global subject if core `modulesAsGlobals` config is true.

```js
storageSubject.store()
```

```js
core.coreModules.storageModule.subject.store()
```

## Typescript

In order for typescript to see the `storageSubject` global you need to reference the types somewhere in your project, normally `./src/globals.ts`.

```ts
/// <reference types="@universal-packages/core-storage" />
```

This library is developed in TypeScript and shipped fully typed.

## Contributing

The development of this library happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving this library.

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing Guide](./CONTRIBUTING.md)

### License

[MIT licensed](./LICENSE).
