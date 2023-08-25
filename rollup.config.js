import pluginTypescript from '@rollup/plugin-typescript'
import { babel } from '@rollup/plugin-babel';
export default {
    input: 'bin/cli.js',
    output: [{
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'bundle',
        // plugins: [pluginTypescript()]
    }],
    plugins: [pluginTypescript(), babel()]
}