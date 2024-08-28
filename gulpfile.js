"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilarSassTask() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimirImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimirJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

exports.default = function () {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilarSassTask));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimirImagens));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimirJavaScript));
};
