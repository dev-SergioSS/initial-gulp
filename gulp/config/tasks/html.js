import fileinclude from 'gulp-file-include';
import webpHtmlNoSvg from 'gulp-webp-html-nosvg'; // ств. тег <picture> з лінком на svg

export const html = () => {
	return (
		app.gulp
			.src(app.path.src.html)
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: 'HTML',
						message: 'Error: <%= error.message %>',
					})
				)
			)
			.pipe(fileinclude())
			.pipe(app.plugins.replace(/@img\//g, 'img/'))
			.pipe(app.plugins.replace(/@icons\//g, 'img/icons/'))

			//   add webp in <picture> --fast
			.pipe(app.plugins.if(app.isFast, webpHtmlNoSvg()))
			.pipe(app.gulp.dest(app.path.build.html))
			.pipe(app.plugins.browsersync.stream())
	);
};
