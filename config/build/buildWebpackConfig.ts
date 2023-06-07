import { Configuration } from "webpack"
import { IBuildOptions } from "./types/config"
import path from "path"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolves } from "./buildResolves"
import { buildDevServer } from "./buildDevServer"

export const buildWebpackConfig = (options: IBuildOptions): Configuration => {
  const {paths, mode} = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js', // contenthash - решает проблему хэширования
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolves(),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options)
  }
}