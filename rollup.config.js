import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pResolve = p => path.resolve(__dirname, p)

export default {
  input: pResolve('./packages/core/src/index.ts'),
  output: [
    {
      format: 'cjs',
      file: pResolve('dist/editor.cjs.js'),
    },
    {
      format: 'es',
      file: pResolve('dist/editor.esm.js'),
    },
  ],
  plugins: [
    external(),
    json(),
    nodeResolve({
      browser: true,
    }),
    commonjs(),
    globals(),
    builtins(),
    typescript(),
  ],
}
