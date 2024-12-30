import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev);

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  };

  return [
    fileLoader,
    svgLoader,
    typescriptLoader,
    cssLoader
  ];
}
