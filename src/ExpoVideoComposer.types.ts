export type RenderOptions = {
  images: string[];         // file:// URIs to local images
  audioUri?: string;        // file:// preferred
  duration?: number;        // default 15s
  fps?: number;             // default 30
  width?: number;           // default 1080
  height?: number;          // default 1920
  crossfade?: number;       // default 0.5s
};

export type ExpoVideoComposerModuleEvents = {
  onChange: (value: string) => void;
};

export type ExpoVideoComposerViewProps = {
  url?: string;
  onLoad?: (event: { nativeEvent: { url: string } }) => void;
};