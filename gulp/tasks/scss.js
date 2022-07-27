import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueires from 'gulp-group-css-media-queries'
import webpcss from 'gulp-webpcss'

import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';


const sass = gulpSass(dartSass)

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SCSS',
				message: 'Error: <%= error.message %>',
			})
		))
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(webpcss({
			webpClass: '.webp',
			noWebpClass: '.no-webp'
		}))
		
		.pipe(groupCssMediaQueires()) 
		.pipe(autoPrefixer())
		.pipe(app.gulp.dest(app.path.build.scss))
		// minifications
		.pipe(cleanCss())
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(app.gulp.dest(app.path.build.scss))
		//
		.pipe(app.plugins.browsersync.stream())
};
