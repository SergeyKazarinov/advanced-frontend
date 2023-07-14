import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { IBuildOptions } from './types/config';

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

export const buildPlugins = (options: IBuildOptions): WebpackPluginInstance[] => {
  const {
    paths,
    isDev,
    apiUrl,
    project,
  } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths!.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new CopyPlugin({
      patterns: [
        { from: paths!.locales, to: paths?.buildLocales },
      ],
    }),
    new ReactRefreshWebpackPlugin(),
    new HotModuleReplacementPlugin(),

    // new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ];
};
