import { RuleSetRule } from "webpack"

export const buildLoaders = (): RuleSetRule[] => {

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
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  return [
    tsLoader,
    sccLoader,
  ]
}