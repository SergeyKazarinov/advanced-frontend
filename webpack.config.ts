import path from 'path';

import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildPaths } from './config/build/types/config';

const paths: IBuildPaths = {
  entry: {
    RANDOM: path.resolve(__dirname, 'src', 'index.ts'),
    main: path.resolve(__dirname, 'src', 'index.ts'),
  },
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = mode === 'development';

const config: Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev
});

export default config;