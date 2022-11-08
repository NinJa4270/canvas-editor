import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resolve = (p) => path.resolve(__dirname, p)

export default {
    input: resolve('./packages/core/src/index.ts'),
    output: [
        {
            format: 'cjs',
            file: resolve('dist/editor.cjs.js')
        },
        {
            format: 'es',
            file: resolve('dist/editor.esm.js')
        },
    ],
    plugins: [
        nodeResolve(),
        typescript()
    ]
}