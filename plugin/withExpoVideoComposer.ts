import { ConfigPlugin, withPlugins } from '@expo/config-plugins';

const withExpoVideoComposer: ConfigPlugin = (config) => {
  // Reserved for future: add Photo Library perms, build settings, etc.
  return withPlugins(config, []);
};

export default withExpoVideoComposer;