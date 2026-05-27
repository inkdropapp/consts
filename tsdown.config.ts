import { defineConfig } from 'tsdown'

const kebabCaseToPascalCase = (string = '') =>
  string.replace(/(^\w|-\w)/g, replaceString =>
    replaceString.replace(/-/, '').toUpperCase()
  )

const globalName = kebabCaseToPascalCase('inkdrop-consts')

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
  },
  {
    entry: 'src/index.ts',
    outDir: 'lib',
    format: 'umd',
    globalName,
    platform: 'browser',
    outExtensions: () => ({ js: '.js' }),
    dts: false,
    sourcemap: false,
    minify: true,
    clean: false
  }
])
