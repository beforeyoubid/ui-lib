import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';

import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default [
  {
    input: {
      index: 'src/index.ts',
      ...Object.fromEntries(
        glob
          .sync('src/**/*.{ts,tsx}', { ignore: ['src/__tests__/**/*', 'src/stories/**/*'] })
          .map(file => [
            path.relative('src', file.slice(0, file.length - path.extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
    },
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      json(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['src/__tests__/**/*', 'src/stories/**/*', 'danger/**/*', 'Dangerfile.ts'],
        emitDeclarationOnly: true,
        declarationDir: 'dist',
      }),
      terser(),
    ],
  },
];
