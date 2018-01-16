import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default {
    input: './src/secrets.js',
    output: {
        file: './dist/secrets.min.js',
        format: 'umd',
        name: 'Secrets'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
};
