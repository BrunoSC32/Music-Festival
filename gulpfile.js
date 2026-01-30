import { src, dest, watch, series } from "gulp";
import * as sass from "sass";
import gulpSass from "gulp-sass";

const compileSass = gulpSass(sass)

export function styles(){

  return src("src/scss/app.scss")
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(dest("build/css"))
}

export function scripts() {
  return src("src/js/app.js")
    .pipe(dest("build/js"))
}

export function dev() {
  watch("src/scss/**/*.scss", styles)
  watch("src/js/**/*.js", scripts)
}

export default series( styles, scripts, dev)