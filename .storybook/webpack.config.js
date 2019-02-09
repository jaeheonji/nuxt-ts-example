const path = require('path')

module.exports = (baseConfig, env, config) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: ['postcss-loader'],
      include: [path.resolve(__dirname, '../src/assets/css/tailwind.css')],
    },
    {
      test: /\.s?css$/,
      use: [
        'vue-style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader',
        'sass-loader',
      ],
      exclude: [path.resolve(__dirname, '../src/assets/css/tailwind.css')],
    },
  )
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
