export type BuildMode = 'development' | 'production';

export type BuildPaths = {
  entry: string; 
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  analyze?: boolean;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  analyze?: boolean;
}
