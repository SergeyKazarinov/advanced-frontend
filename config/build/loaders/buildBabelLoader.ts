import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildBabelLoaderProps } from '../buildLoaders';

export const buildBabelLoader = (options: BuildBabelLoaderProps) => ({
  test: options.isTsx ? /\.(|jsx|tsx)$/ : /\.(|js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-env'],
      plugins: [
        [
          '@babel/plugin-transform-typescript',
          {
            isTsx: options.isTsx,
          },
        ],
        '@babel/plugin-transform-runtime',
        options.isTsx && !options.isDev && [
          babelRemovePropsPlugin(),
          {
            props: ['data-testid'],
          },
        ],
      ].filter(Boolean),
    },
  },
});
