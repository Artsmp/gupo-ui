// packages/vlib-ui/scripts/build/utils/paths.ts
import { resolve } from 'path'

// root
export const root = resolve(__dirname, '..', '..', '..')
export const compRoot = resolve(root, './src')
export const entryFile = resolve(compRoot, './components.ts')

// output
export const output = resolve(root, 'dist')
export const outputEsm = resolve(root, 'es')
export const outputCjs = resolve(root, 'lib')

// package
export const compPackage = resolve(root, 'package.json')
