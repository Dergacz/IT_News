import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers ({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {},
    preferAbsolute: true,
    mainFiles: ['index'],
    modules: [paths.src, 'node_modules'],
  }
}
