import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"
import { IBuildOptions } from "./types/config"

export const buildLoaders = (options: IBuildOptions): RuleSetRule[] => {

  //Если не используем TS, то необходимо использовать babel
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const sccLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          import: true,
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: options.isDev 
            ? '[path][name]__[local]' 
            : '[hash:base64:5]',
          }
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  return [
    tsLoader,
    sccLoader,
  ]
}