import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'

export default [{
  input: 'src/abis.js',
  output: [{
    format: 'cjs',
    dir: 'dist/commonjs',
    plugins: [
      json(),
      terser()
    ]
  }, {
    format: 'es',
    dir: 'dist/module',
    plugins: [
      json(),
      terser()
    ]
  }]
}]
