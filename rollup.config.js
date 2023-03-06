import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'scripts/xkcd_fetcher.ts',
    output: { file: 'scripts/xkcd_fetcher.js' },
    plugins: [ nodeResolve({ browser: true }), typescript() ],
};