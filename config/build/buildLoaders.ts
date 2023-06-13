import { RuleSetRule } from 'webpack';
import { IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export const buildLoaders = (options: IBuildOptions): RuleSetRule[] => {
  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
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
        ],
      },
    },
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = buildSvgLoader();

  // Если не используем TS, то необходимо использовать babel
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const sccLoader = buildCssLoader(options);

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    sccLoader,
  ];
};
