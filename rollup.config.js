'use strict';

const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const uglify = require("rollup-plugin-uglify");
const nodeResolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

module.exports = {
    entry: "./index.jsx",
    dest: 'public/bundle.js',
    plugins: [
    	replace({
    	    'process.env.NODE_ENV': JSON.stringify( 'production' )
    	}),
        babel({
            presets: ['es2015-rollup'],
            exclude: "node_modules/**"
        }),
        commonjs({
            include: 'node_modules/**',
        }),
    	nodeResolve({
    	    module: true,
        }),
        uglify()
    ]
};
