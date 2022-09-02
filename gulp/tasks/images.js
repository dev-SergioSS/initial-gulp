import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import webp from 'gulp-webp';

export const images = () => {
  return (
    app.gulp
      .src(app.path.src.images)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'IMAGES',
            message: 'Error: <%= error.message %>',
          }),
        ),
      )
      // 	webp
      .pipe(app.plugins.newer(app.path.build.images))
      .pipe(webp())
      .pipe(app.gulp.dest(app.path.build.images))
      //   зжимання
      .pipe(app.gulp.src(app.path.src.images))
      .pipe(app.plugins.newer(app.path.build.images))
      .pipe(
        imagemin([
          gifsicle({ interlaced: true }),
          mozjpeg({ quality: 75, progressive: true }),
          optipng({ optimizationLevel: 5 }),
          svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ]),
      )
      .pipe(app.gulp.dest(app.path.build.images))
      //	svg
      .pipe(app.gulp.src(app.path.src.svg))
      .pipe(app.gulp.dest(app.path.build.images))
      .pipe(app.plugins.browsersync.stream())
  );
};