import { src, dest, watch, series } from "gulp";
import * as sass from "sass";
import gulpSass from "gulp-sass";

const compileSass = gulpSass(sass)

export function styles() {
  return src("src/scss/app.scss", { sourcemaps: true })
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(dest("build/css", { sourcemaps: "." }));
}

export function scripts(done) {
  src('src/js/app.js')
        .pipe( dest('build/js') ) 

  done()
}

export function dev() {
  watch("src/scss/**/*.scss", styles)
  watch("src/js/**/*.js", scripts)
}

export default series( styles, scripts, dev)