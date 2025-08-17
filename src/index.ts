// Reexport the native module. On web, it will be resolved to ExpoVideoComposerModule.web.ts
// and on native platforms to ExpoVideoComposerModule.ts
export { default } from './ExpoVideoComposerModule';
export { default as ExpoVideoComposerView } from './ExpoVideoComposerView';
export * from  './ExpoVideoComposer.types';
