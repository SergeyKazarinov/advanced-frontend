import { Configuration } from 'webpack';
import { IBuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: IBuildOptions): Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths!.entry,
    output: {
      path: paths!.build,
      filename: '[name].[contenthash].js', // contenthash - решает проблему хэширования
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
