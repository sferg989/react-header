import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { withZephyr } from 'zephyr-webpack-plugin';
export default defineConfig({
  tools: {
    //ts-ignore
    rspack: (config) => {
      config.resolve ||= {};
      config.resolve.alias ||= {};
      config.resolve.alias['@util'] = 'src/util';
      return withZephyr({

      })(config);
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federation_provider',
      exposes: {
        './button': './src/button.tsx',
        './header': './src/components/gradientHeader.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3000,
  },
});
