import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from '../types/config';

export const buildCssLoader = ({ isDev }: IBuildOptions) => ({
  test: /\.s?[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    // Creates `style` nodes from JS strings
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    {
      loader: 'css-loader',
      options: {
        import: true,
        modules: {
          auto: (resPath: string) => resPath.includes('.module.'),
          localIdentName: isDev
            ? '[path][name]__[local]'
            : '[hash:base64:5]',
        },
      },
    },
    // Compiles Sass to CSS
    'sass-loader',
  ],
});
