import nodent from "rollup-plugin-nodent";
import babel from "@rollup/plugin-babel";
import cleanup from "rollup-plugin-cleanup";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import gzipPlugin from "rollup-plugin-gzip";
import analyze from "rollup-plugin-analyzer";
import sizes from "rollup-plugin-sizes";
import serve from "rollup-plugin-serve";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import css from "rollup-plugin-import-css";
import svg from 'rollup-plugin-svg-import';
import globals from 'rollup-plugin-node-globals';

const libName = "swiftyper";
const limitBytes = 0.5 * 1024 * 1024;
const onAnalysis = ({ bundleSize }) => {
  if (bundleSize < limitBytes) return;
  console.log(`Bundle size exceeds ${limitBytes} bytes: ${bundleSize} bytes`);
  return process.exit(1);
};

export default [
  {
    input: "src/swiftyper.js",
    output: {
      file: pkg.browser,
      name: libName,
      format: "umd",
    },
    plugins: [
      css(),
      svg({
        stringify: true,
      }),
      nodeResolve({
        module: true,
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
      //  include: /node_modules/
      }),
      globals(),
      builtins(),
      nodent({
        es7: true,
        promises: true,
        sourcemap: true,
        noRuntime: true,
        es6target: true,
      }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env"],
      }),
      cleanup(),
      terser({
        toplevel: true,
      }),
      gzipPlugin(),
    ],
  },
  {
    input: "src/swiftyper.js",
    output: {
      file: pkg.main,
      name: libName,
      format: "umd",
    },
    plugins: [
      css(),
      svg({
        stringify: true,
      }),
      nodeResolve({
        module: true,
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
      //  include: /node_modules/
      }),
      globals(),
      builtins(),
      nodent({
        es7: true,
        promises: true,
        sourcemap: true,
        noRuntime: true,
        es6target: true,
      }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env"],
      }),
      cleanup(),
      gzipPlugin(),
      analyze({
        onAnalysis,
        summaryOnly: true,
        showExports: true,
      }),
      sizes(),
      serve({
        open: true,
        openPage: "/index.html",
        host: "localhost",
        port: 8000,
        verbose: true,
        contentBase: "./dist",
      }),
      // livereload({ watch: "./dist" }),
    ],
  },
];
