// app.plugin.js
const { createRunOncePlugin } = require('@expo/config-plugins');
const pkg = require('./package.json');

// No-op for now — later you can edit Info.plist, add usage strings, etc.
const withExpoVideoComposer = (config /*, props */) => config;

module.exports = createRunOncePlugin(withExpoVideoComposer, pkg.name, pkg.version);