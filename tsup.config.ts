import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/locales/en.ts',
    'src/locales/ja.ts',
    'src/locales/es.ts',
    'src/locales/de.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: true,
  target: 'es2020',
});
