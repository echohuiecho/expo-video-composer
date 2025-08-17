import { requireNativeModule } from 'expo-modules-core';
import type { RenderOptions } from './ExpoVideoComposer.types';

export interface ExpoVideoComposerModuleType {
  render(options: RenderOptions): Promise<string>; // returns file:// URL
}

export default requireNativeModule<ExpoVideoComposerModuleType>('ExpoVideoComposer');