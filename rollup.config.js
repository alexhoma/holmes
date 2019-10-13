import babel from 'rollup-plugin-babel';

export default {
  input: 'js/main.js',
  plugins: [
    babel({
      babelrc: false,
      presets: ['@babel/preset-env', 'minify'],
      plugins: ['@babel/plugin-transform-flow-strip-types'],
    }),
  ],
  output: [
    { file: 'js/holmes.js', format: 'umd', name: 'holmes' },
    { file: 'js/holmes.es.js', format: 'es' },
  ],
};
