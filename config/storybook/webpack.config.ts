import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { IBuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }): { config: Configuration } => {
  const paths: IBuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule, exclude: /\.svg$/i,
      };
    }

    return rule;
  });
  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildCssLoader({ isDev: true }));
  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify('http://testapi.com'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );
  return config;
};
