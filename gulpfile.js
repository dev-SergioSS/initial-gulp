import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js'
import { reset, copy, html, scss, js, server } from './gulp/tasks/index.js';

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

}
const mainTasks = gulp.parallel(copy, html, scss, js);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);
