import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import {
  reset,
  copy,
  html,
  scss,
  js,
  images,
  ttfToWoff,
  fontsStyle,
  server,
  zip,
} from './gulp/tasks/index.js';

global.app = {
  path,
  gulp,
  plugins,
  isCommon: !process.argv.includes('--fast'),
  isFast: process.argv.includes('--fast'),
};

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
};

const fonts = gulp.series(ttfToWoff, fontsStyle);

const mainTasks = gulp.parallel(copy, fonts, html, scss, js, images);

const common = gulp.series(mainTasks, gulp.parallel(watcher, server));
const resetCommon = gulp.series(
  reset,
  mainTasks,
  gulp.parallel(watcher, server)
);
const fastBuild = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);

export { common };
export { resetCommon };
export { fastBuild };
export { deployZip };

// const dev2 = gulp.parallel(mainTasks, watcher, server);

gulp.task('default', common);
