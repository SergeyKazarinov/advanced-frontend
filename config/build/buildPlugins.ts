import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from 'webpack';

import { IBuildOptions } from './types/config';

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

export const buildPlugins = (options: IBuildOptions): WebpackPluginInstance[] => {
  const {
    paths,
    isDev,
    apiUrl,
    project,
  } = options;

  const plugins = [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        'microfrontend': 'todo-app@https://microfrontend-todo.vercel.app/assets/remoteEntry.js'
      }
    }),
    
    new HtmlWebpackPlugin({
      template: paths!.html,
    }),
    new ProgressPlugin(),

    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),

    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),

    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    // new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ];

  if (options.isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  if (!options.isDev) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }));
    plugins.push(new CopyPlugin({
      patterns: [
        { from: paths!.locales, to: paths?.buildLocales },
      ],
    }));
  }

  return plugins;
};
