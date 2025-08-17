import { ConfigPlugin, withPlugins } from '@expo/config-plugins';

const withExpoVideoComposer: ConfigPlugin = (config) => {
  // This plugin ensures the expo-video-composer module is properly configured
  // The native module should be automatically detected by expo-module-scripts
  return withPlugins(config, [
    (config) => {
      // Add any necessary configurations for the video composer module
      // The module is defined in expo-module.config.json and should be auto-linked
      return config;
    }
  ]);
};

export default withExpoVideoComposer;