export type { RenderOptions } from './ExpoVideoComposer.types';
// IMPORTANT: Include ".js" extension so Node ESM can resolve the compiled file at runtime
import Module, { type ExpoVideoComposerModuleType } from './ExpoVideoComposerModule.js';

export async function renderMemories(options: Parameters<ExpoVideoComposerModuleType['render']>[0]) {
  return Module.render({
    duration: 15,
    fps: 30,
    width: 1080,
    height: 1920,
    crossfade: 0.5,
    ...options,
  });
}