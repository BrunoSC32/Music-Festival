import path from 'path';
import fs from 'fs';
import { src, dest, watch, series } from "gulp";
import * as sass from "sass";
import gulpSass from "gulp-sass";
import terser from 'gulp-terser';

import sharp from 'sharp'

const compileSass = gulpSass(sass)

export function styles() {
  return src("src/scss/app.scss", { sourcemaps: true })
    .pipe(compileSass({
      outputStyle: 'compressed'
    }).on("error", compileSass.logError))
    .pipe(dest("build/css", { sourcemaps: "." }));
}

export function scripts(done) {
  src('src/js/app.js')
    .pipe(terser())
    .pipe( dest('build/js') ) 

  done()
}



export async function crop(done) {
    const inputFolder = 'src/img/gallery/full'
    const outputFolder = 'src/img/gallery/thumb';
    const width = 250;
    const height = 180;
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true })
    }
    const images = fs.readdirSync(inputFolder).filter(file => {
        return /\.(jpg)$/i.test(path.extname(file));
    });
    try {
        images.forEach(file => {
            const inputFile = path.join(inputFolder, file)
            const outputFile = path.join(outputFolder, file)
            sharp(inputFile) 
                .resize(width, height, {
                    position: 'centre'
                })
                .toFile(outputFile)
        });

        done()
    } catch (error) {
        console.log(error)
    }
}

export function dev() {
  watch("src/scss/**/*.scss", styles)
  watch("src/js/**/*.js", scripts)
}

export default series(crop, styles, scripts, dev)