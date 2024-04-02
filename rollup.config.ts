import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import css from 'rollup-plugin-import-css';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
import type { Plugin, RollupOptions } from 'rollup';

import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import packageJson from './package.json' assert { type: 'json' };

const configCjs: RollupOptions = {
  input: 'src/index.ts',
  output: {
    file: packageJson.main,
    format: 'cjs',
    sourcemap: true,
    dynamicImportInCjs: false,
  },
  plugins: [
    // peerDepsExternal() as Plugin,
    json(),
    resolve(),
    commonjs({
      requireReturnsDefault: 'preferred',
    }),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: [
        'dist/**/*',
        'types/**/*',
        'src/__tests__/**/*',
        'src/stories/**/*',
        'src/test-props.tsx',
        'danger/**/*',
        'Dangerfile.ts',
        'rollup.config.ts',
      ],
      declarationDir: '',
      noEmit: true,
    }),
    terser(),
    css(),
  ],
  external: [...Object.keys(packageJson.peerDependencies), 'react-is', 'react/jsx-runtime'],
};

const config: RollupOptions = {
  input: {
    index: 'src/index.ts',
    ...Object.fromEntries(
      glob
        .sync('src/**/*.{ts,tsx}', { ignore: ['src/__tests__/**/*', 'src/test-props.tsx', 'src/stories/**/*'] })
        .map(file => [
          path.relative('src', file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
    ),
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal() as Plugin,
    json(),
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: [
        'dist/**/*',
        'types/**/*',
        'src/__tests__/**/*',
        'src/stories/**/*',
        'src/test-props.tsx',
        'danger/**/*',
        'Dangerfile.ts',
        'rollup.config.ts',
      ],
      declarationDir: 'dist',
      emitDeclarationOnly: true,
    }),
    terser(),
    css(),
  ],
};

export default [config, configCjs];
