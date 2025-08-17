# expo-video-composer

An Expo plugin for creating short slideshows with photos using Ken Burns zoom effects, cross-fade transitions, and soundtracks.

## Features

- 🎬 Create beautiful slideshows from photo collections
- 🎭 Ken Burns zoom effects for dynamic visual appeal
- 🔄 Smooth cross-fade transitions between photos
- 🎵 Background audio support
- 📱 Optimized for mobile video output (1080x1920 default)
- ⚡ High-performance native rendering

## Installation

### 1. Install the package

```bash
npx expo install expo-video-composer
```

### 2. Configure your app

Add the plugin to your `app.json` or `app.config.js`:

```json
{
  "expo": {
    "plugins": [
      "expo-video-composer"
    ]
  }
}
```

### 3. Rebuild your app

```bash
npx expo prebuild --clean
```

## Usage

### Basic Example

```typescript
import { renderMemories } from 'expo-video-composer';

// Create a slideshow from local images
const videoUri = await renderMemories({
  images: [
    'file:///path/to/image1.jpg',
    'file:///path/to/image2.jpg',
    'file:///path/to/image3.jpg'
  ],
  audioUri: 'file:///path/to/background-music.mp3', // optional
  duration: 15, // seconds
  fps: 30,
  width: 1080,
  height: 1920,
  crossfade: 0.5 // seconds
});

console.log('Video created at:', videoUri);
```

### Advanced Example

```typescript
import { renderMemories } from 'expo-video-composer';
import * as MediaLibrary from 'expo-media-library';

const createSlideshow = async () => {
  try {
    // Get images from device gallery
    const { assets } = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.photo,
      first: 10, // Get first 10 photos
    });

    const imageUris = assets.map(asset => asset.uri);

    // Render the slideshow
    const videoUri = await renderMemories({
      images: imageUris,
      audioUri: 'file:///path/to/your/music.mp3',
      duration: 20, // 20 second slideshow
      fps: 30,
      width: 1080,
      height: 1920,
      crossfade: 0.8 // Longer crossfade for smoother transitions
    });

    // Save to device gallery
    await MediaLibrary.saveToLibraryAsync(videoUri);

    console.log('Slideshow saved to gallery!');
  } catch (error) {
    console.error('Error creating slideshow:', error);
  }
};
```

## API Reference

### `renderMemories(options: RenderOptions): Promise<string>`

Creates a video slideshow from the provided images and returns a file URI to the generated video.

#### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `images` | `string[]` | ✅ | - | Array of file URIs to local images |
| `audioUri` | `string` | ❌ | - | File URI to background audio (preferred format: MP3) |
| `duration` | `number` | ❌ | `15` | Total duration of the slideshow in seconds |
| `fps` | `number` | ❌ | `30` | Frames per second for the output video |
| `width` | `number` | ❌ | `1080` | Output video width in pixels |
| `height` | `number` | ❌ | `1920` | Output video height in pixels |
| `crossfade` | `number` | ❌ | `0.5` | Cross-fade transition duration in seconds |

#### Returns

- `Promise<string>`: File URI to the generated video file

#### TypeScript Types

```typescript
export type RenderOptions = {
  images: string[];         // file:// URIs to local images
  audioUri?: string;        // file:// preferred
  duration?: number;        // default 15s
  fps?: number;            // default 30
  width?: number;          // default 1080
  height?: number;         // default 1920
  crossfade?: number;      // default 0.5s
};
```

## Platform Support

- ✅ iOS
- ✅ Android
- ❌ Web (not supported)

## Requirements

- Expo SDK 53+
- React Native 0.79+
- iOS 13.0+
- Android API level 21+

## Permissions

The plugin may require the following permissions depending on your usage:

- **Photo Library Access**: For accessing device photos
- **Audio Recording**: For background audio playback

Add these to your `app.json`:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-media-library",
        {
          "photosPermission": "Allow $(PRODUCT_NAME) to access your photos to create slideshows.",
          "savePhotosPermission": "Allow $(PRODUCT_NAME) to save slideshows to your photo library."
        }
      ]
    ]
  }
}
```

## Performance Tips

1. **Image Optimization**: Use compressed images (JPEG/PNG) for better performance
2. **Audio Format**: MP3 is the recommended audio format
3. **Video Duration**: Keep slideshows under 60 seconds for optimal performance
4. **Image Count**: Limit to 20-30 images per slideshow for smooth rendering

## Troubleshooting

### Common Issues

**"Permission denied" error**
- Ensure you have proper photo library permissions
- Check that file URIs are accessible

**"Audio file not found" error**
- Verify the audio file URI is correct
- Ensure the audio file is in a supported format (MP3 recommended)

**"Rendering failed" error**
- Check that all image URIs are valid
- Ensure images are in supported formats (JPEG, PNG)
- Verify sufficient device storage space

### Debug Mode

Enable debug logging by setting the environment variable:

```bash
EXPO_DEBUG=1 npx expo start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the module: `npm run build`
4. Run tests: `npm test`

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: echohui@noseborg.com
- 🐛 Issues: [GitHub Issues](https://github.com/echohuiecho/expo-video-composer/issues)
- 📖 Documentation: [GitHub Wiki](https://github.com/echohuiecho/expo-video-composer/wiki)

## Changelog

### 0.1.0
- Initial release
- Basic slideshow rendering with Ken Burns effects
- Cross-fade transitions
- Background audio support
- iOS and Android support
