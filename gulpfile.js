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
} from './gulp/tasks/index.js';

global.app = {
  path,
  gulp,
  plugins,
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

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);
