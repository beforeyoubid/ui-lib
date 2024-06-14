import path from 'node:path';
import { fileURLToPath } from 'node:url';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import glob from 'glob';
import css from 'rollup-plugin-import-css';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

import packageJson from './package.json' assert { type: 'json' };

import type { Plugin, RollupOptions } from 'rollup';

// for any paths needing to be manually imported by path location
const singleFileImports: { input: string; output: string }[] = [
  { input: 'src/index.ts', output: packageJson.main },
  { input: 'src/icons.ts', output: 'dist/icons.cjs' },
  { input: 'src/mui-theme.ts', output: 'dist/mui-theme.cjs' },
  { input: 'src/components/RichTextEditor.tsx', output: 'dist/components/RichTextEditor.cjs' },
];

const commonImports = singleFileImports.map(
  ({ input, output }): RollupOptions => ({
    input,
    output: {
      file: output,
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
  })
);

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

export default [config, ...commonImports];
