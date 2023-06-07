import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import { ProgressPlugin, WebpackPluginInstance } from "webpack"
import { IBuildOptions } from "./types/config"

export const buildPlugins = ({paths}: IBuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin()
  ]
}