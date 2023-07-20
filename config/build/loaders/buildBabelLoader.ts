import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildBabelLoaderProps } from '../buildLoaders';

export const buildBabelLoader = (options: BuildBabelLoaderProps) => ({
  test: options.isTsx ? /\.(|jsx|tsx)$/ : /\.(|js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          'i18next-extract',
          {
            locales: ['ru', 'en'],
            keyAsDefaultValue: true,
          },
        ],
        [
          '@babel/plugin-transform-typescript',
          {
            isTsx: options.isTsx,
          },
        ],
        '@babel/plugin-transform-runtime',
        options.isTsx && [
          babelRemovePropsPlugin(),
          {
            props: ['data-testid'],
          },
        ],
      ].filter(Boolean),
    },
  },
});
