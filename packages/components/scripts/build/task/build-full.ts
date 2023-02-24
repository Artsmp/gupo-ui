import { resolve } from 'path'
import { entryFile, generateExternal, output, PKG_CAMELCASE_NAME, target } from '../utils'
import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
const build = async (minify: boolean) => {
  const input = [entryFile]

  const bundle = await rollup({
    input,
    plugins: [
      vue(),
      vueJsx(),
      nodeResolve(),
      esbuild({
        target,
        sourceMap: minify,
        treeShaking: true,
      }),
      minify
        ? minifyPlugin({
            target,
            sourceMap: minify,
          })
        : null,
    ],
    treeshake: true,
    external: generateExternal({ full: false }),
  })

  await Promise.all([
    bundle.write({
      format: 'esm',
      file: resolve(output, `index${minify ? '.min' : ''}.mjs`),
      exports: undefined,
      sourcemap: minify,
    }),
    bundle.write({
      format: 'umd',
      file: resolve(output, `index${minify ? '.min' : ''}.js`),
      exports: 'named',
      sourcemap: minify,
      name: PKG_CAMELCASE_NAME,
      globals: {
        vue: 'Vue',
        'ant-design-vue': 'antDesignVue',
      },
    }),
  ])
}

// 合并为一个主任务
export const buildFull = async () => {
  await Promise.all([build(false), build(true)])
}
