import gulp from 'gulp'

import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'
import {
  reset,
  copy,
  html,
  scss,
  js,
  images,
  otfToTtf,
  ttfToWoff,
  fontsStyle,
  server,
  zip,
} from './gulp/tasks/index.js'

global.app = {
  path,
  gulp,
  plugins,
  isdev: !process.argv.includes('--optimize'),
  isOptimize: process.argv.includes('--optimize'),
}

const watcher = () => {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images)
)

// -- Сценарії

// develop
const dev = gulp.series(mainTasks, gulp.parallel(watcher, server))

// develop - перед цим видаляється DIST
const resetDev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

// Арівувати готовий результат
const deployZip = gulp.series(reset, mainTasks, zip)

export { dev }
export { resetDev }
export { deployZip }

gulp.task('default', dev)
