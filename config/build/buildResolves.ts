import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export const buildResolves = (options: IBuildOptions): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
  preferAbsolute: true,
  modules: [options.paths!.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {
    '@entities': [options.paths!.src, 'entities'],
    '@features': [options.paths!.src, 'features'],
    '@shared': [options.paths!.src, 'shared'],
    '@app': [options.paths!.src, 'app'],
    '@widgets': [options.paths!.src, 'widgets'],
    '@pages': [options.paths!.src, 'pages'],
  },
});
