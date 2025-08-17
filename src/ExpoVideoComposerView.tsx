import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoVideoComposerViewProps } from './ExpoVideoComposer.types';

const NativeView: React.ComponentType<ExpoVideoComposerViewProps> =
  requireNativeView('ExpoVideoComposer');

export default function ExpoVideoComposerView(props: ExpoVideoComposerViewProps) {
  return <NativeView {...props} />;
}
