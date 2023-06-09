import webpackDevServer from 'webpack-dev-server';
import { IBuildOptions } from './types/config';

export const buildDevServer = (options: IBuildOptions): webpackDevServer.Configuration => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
