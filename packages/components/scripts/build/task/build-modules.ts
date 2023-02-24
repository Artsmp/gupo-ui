import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild from 'rollup-plugin-esbuild'
import { outputEsm, outputCjs, compRoot } from '../utils/paths'
import { target, generateExternal } from '../utils/rollup'
import { resolve } from 'path'

export const buildModules = async () => {
  // 入口
  const input = [resolve(compRoot, './components.ts')]
  console.log('entryFile: ', input)

  // 编译解析
  const bundle = await rollup({
    input,
    plugins: [
      vue(),
      vueJsx(),
      nodeResolve(),
      esbuild({
        target,
        sourceMap: true,
      }),
    ],
    treeshake: false,
    external: generateExternal({ full: true }), // 外部模块，所有依赖都设置为外部模块
  })

  console.log('outputEsm: ', outputEsm)
  // 输出文件
  await Promise.all([
    bundle.write({
      format: 'esm', // 模块格式
      dir: outputEsm, // 输出目录
      exports: undefined, // 导出模式
      preserveModules: true, // 与原始模块创建相同的文件
      preserveModulesRoot: 'src', // 路径有分叉的话这个将不生效
      sourcemap: true, // 生成 sourcemap
      entryFileNames: (info) => {
        console.log('info: ', info.name)
        return `${info.name}.mjs`
      }, // 生成文件名
    }),
    bundle.write({
      format: 'cjs',
      dir: outputCjs,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: `[name].js`,
    }),
  ])
}
