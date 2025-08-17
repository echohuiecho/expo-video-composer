// Use explicit JS entry so Node doesn't try to import TS source (src/index.ts)
import { requireNativeModule } from 'expo-modules-core/build/index.js';
import type { RenderOptions } from './ExpoVideoComposer.types';

export interface ExpoVideoComposerModuleType {
  render(options: RenderOptions): Promise<string>; // returns file:// URL
}

export default requireNativeModule<ExpoVideoComposerModuleType>('ExpoVideoComposer');