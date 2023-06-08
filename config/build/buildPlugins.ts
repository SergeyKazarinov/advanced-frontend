import HtmlWebpackPlugin from "html-webpack-plugin"
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from "webpack"
import { IBuildOptions } from "./types/config"
import MiniCssExtractPlugin  from 'mini-css-extract-plugin'

export const buildPlugins = ({paths, isDev}: IBuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]
}