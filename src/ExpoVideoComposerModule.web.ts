import { registerWebModule, NativeModule } from 'expo';

import { ExpoVideoComposerModuleEvents } from './ExpoVideoComposer.types';

class ExpoVideoComposerModule extends NativeModule<ExpoVideoComposerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoVideoComposerModule, 'ExpoVideoComposerModule');
