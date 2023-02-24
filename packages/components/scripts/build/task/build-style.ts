import { dest, src } from 'gulp'
import gulpLess from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import { compRoot, output, outputEsm, outputCjs } from '../utils/paths'

/**
 * [src/*.scss] to [es/*.scss, lib/*.scss]
 */
const buildLessCopy = async () => {
  await new Promise((resolve) => {
    src(`${compRoot}/**/*.less`)
      .pipe(dest(outputEsm)) // es
      .pipe(dest(outputCjs)) // lib
      .on('end', resolve) // 监听流完成
  })
}

/**
 * [src/**\/style/*.scss] to [es/**\/style/*.css, lib/**\/style/*.css]
 */
const buildLessModules = async () => {
  await new Promise((resolve) => {
    src(`${compRoot}/**/style/*.less`)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .pipe(gulpLess({ javascriptEnabled: true })) // 编译
      .pipe(autoprefixer({ cascade: false })) // 兼容
      .pipe(cleanCSS()) // 压缩
      .pipe(dest(outputEsm)) // es
      .pipe(dest(outputCjs)) // lib
      .on('end', resolve) // 监听流完成
  })
}

/**
 * [src/*.scss] to [dist/*.css]
 */
const buildLessFull = async () => {
  await new Promise((resolve) => {
    src(`${compRoot}/*.less`)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .pipe(gulpLess({ javascriptEnabled: true })) // 编译
      .pipe(autoprefixer({ cascade: false })) // 兼容
      .pipe(cleanCSS()) // 压缩
      .pipe(dest(output)) // dist
      .on('end', resolve) // 监听流完成
  })
}

export const buildStyle = async () => {
  await Promise.all([buildLessCopy(), buildLessModules(), buildLessFull()])
}
