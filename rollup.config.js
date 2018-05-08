import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import filesize from 'rollup-plugin-filesize';
import minify from 'rollup-plugin-babel-minify';
import uglify from 'rollup-plugin-uglify';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.js',
      format: 'umd',
      name: 'wakatime-client',
      globals: ['axios'],
    },
    {
      file: 'build/index.cjs.js',
      format: 'cjs',
      name: 'wakatime-client',
      globals: ['axios'],
    },
    {
      file: 'build/index.esm.js',
      format: 'es',
      name: 'wakatime-client',
      globals: ['axios'],
    },
  ],
  external: ['axios'],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    localResolve(),
    resolve({
      module: true,
      jsnext: true,
      main: true,
      preferBuiltins: true,
      browser: true,
      modulesOnly: true,
    }),
    minify(),
    uglify(),
    commonjs(),
    filesize(),
  ],
};

export default config;
