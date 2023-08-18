import pluginTypescript from '@rollup/plugin-typescript'

export default {
    input: 'src/index.ts',
    output: [{
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'bundle',
        // plugins: [pluginTypescript()]
    }],
    plugins: [pluginTypescript()]
}