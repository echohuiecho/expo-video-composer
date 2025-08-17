// Use package entry so Metro resolves correctly in RN. Node won't evaluate this
// thanks to the dynamic import in src/index.ts.
import { requireNativeModule } from 'expo-modules-core';
import type { RenderOptions } from './ExpoVideoComposer.types';

export interface ExpoVideoComposerModuleType {
  render(options: RenderOptions): Promise<string>; // returns file:// URL
}

export default requireNativeModule<ExpoVideoComposerModuleType>('ExpoVideoComposer');