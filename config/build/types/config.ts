export type TBuildMode = 'production' | 'development';

export interface IBuildPaths {
  entry: string | {[name: string]: string};
  build: string;
  html: string;
}

export interface IBuildOptions {
  mode: TBuildMode,
  paths: IBuildPaths,
  isDev: boolean,
}