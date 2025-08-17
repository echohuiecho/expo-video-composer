export type { RenderOptions } from './ExpoVideoComposer.types';
// Avoid importing native module at top-level so Node (Metro server/SSR) doesn't try to load TS from expo-modules-core
// Dynamically import the native module only when the API is invoked.
export async function renderMemories(options: { images: string[]; audioUri?: string; duration?: number; fps?: number; width?: number; height?: number; crossfade?: number; }) {
  const { default: Module } = await import('./ExpoVideoComposerModule.js');
  return Module.render({
    duration: 15,
    fps: 30,
    width: 1080,
    height: 1920,
    crossfade: 0.5,
    ...options,
  });
}