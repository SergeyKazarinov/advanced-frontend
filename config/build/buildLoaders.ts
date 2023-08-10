import { RuleSetRule } from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { IBuildOptions } from './types/config';

export interface BuildBabelLoaderProps extends IBuildOptions {
  isTsx?: boolean;
}

export const buildLoaders = (options: BuildBabelLoaderProps): RuleSetRule[] => {
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

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
    codeBabelLoader,
    tsxCodeBabelLoader,
    sccLoader,
  ];
};
