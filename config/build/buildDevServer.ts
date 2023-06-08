import { IBuildOptions } from "./types/config"
import webpackDevServer from 'webpack-dev-server';

export const buildDevServer =(options: IBuildOptions): webpackDevServer.Configuration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}