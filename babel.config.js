module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: false
      }
    ],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-object-assign'
  ]
}
