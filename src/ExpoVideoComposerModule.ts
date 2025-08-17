import { NativeModule, requireNativeModule } from 'expo';

import { ExpoVideoComposerModuleEvents } from './ExpoVideoComposer.types';

declare class ExpoVideoComposerModule extends NativeModule<ExpoVideoComposerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoVideoComposerModule>('ExpoVideoComposer');
