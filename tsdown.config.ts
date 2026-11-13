import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: 'src/index.ts',
    outDir: 'lib',
    format: 'cjs',
    outExtensions: () => ({ js: '.js' }),
    dts: true,
    sourcemap: true,
    clean: true
  },
  {
    entry: 'src/index.ts',
    outDir: 'lib',
    format: 'esm',
    outExtensions: () => ({ js: '.esm.js' }),
    dts: false,
    sourcemap: true,
    clean: false
  }
])
