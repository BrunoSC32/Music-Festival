import { src, dest, watch } from "gulp";
import * as sass from "sass";
import gulpSass from "gulp-sass";

const compileSass = gulpSass(sass)

export function styles(){

  return src("src/scss/app.scss")
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(dest("build/css"))
}


export function dev() {
  watch("src/scss/**/*.scss", styles)
}
