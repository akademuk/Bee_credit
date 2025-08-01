import browserSync from "browser-sync"
import { deleteAsync } from "del"
import gulp from "gulp"
import cleanCSS from "gulp-clean-css"
import concat from "gulp-concat"
import htmlmin from "gulp-htmlmin"
import plumber from "gulp-plumber"
import gulpSass from "gulp-sass"
import uglify from "gulp-uglify"
import webp from "gulp-webp"
import * as sass from "sass"

const sassCompiler = gulpSass(sass)
const bs = browserSync.create()

// Paths
const paths = {
    scss: "./src/scss/**/*.scss",
    css: "./dist/css",
    images: "./src/images/**/*.{jpg,jpeg,png}",
    videos: "./src/images/**/*.mp4",
    svg: "./src/images/**/*.svg",
    imagesDist: "./dist/images",
    html: "./src/**/*.html",
    htmlDist: "./dist",
    js: "./src/js/**/*.js",
    jsDist: "./dist/js",
    fonts: "./src/fonts/**/*",
    fontsDist: "./dist/fonts",
}

// Clean Dist Folder
export function clean() {
    return deleteAsync(["./dist/**", "!./dist"])
}

// Compile SCSS to CSS
export function styles() {
    return gulp
        .src(paths.scss)
        .pipe(plumber())
        .pipe(sassCompiler().on("error", sassCompiler.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.css))
        .pipe(bs.stream())
}

// Copy SVG files
export function copySVG() {
    return gulp.src(paths.svg).pipe(gulp.dest(paths.imagesDist))
}

// Copy original images
export function copyImages() {
    return gulp
        .src("./src/images/**/*.{jpg,jpeg,png,avif}", { encoding: false })
        .pipe(gulp.dest(paths.imagesDist))
}

// Convert to WebP
export function webpImages() {
    return gulp
        .src(paths.images, { encoding: false })
        .pipe(webp())
        .pipe(gulp.dest(paths.imagesDist))
}

// Copy videos
export function copyVideos() {
    return gulp.src(paths.videos, { encoding: false }).pipe(gulp.dest(paths.imagesDist))
}

// Process all images
export const processImages = gulp.series(copySVG, copyImages, webpImages, copyVideos)

// Copy Fonts
export function fonts() {
    return gulp.src(paths.fonts, { encoding: false }).pipe(gulp.dest(paths.fontsDist))
}

// Process HTML
export function html() {
    return gulp
        .src(paths.html)
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest(paths.htmlDist))
        .pipe(bs.stream())
}

// Process JS
export function scripts() {
    return gulp
        .src(paths.js)
        .pipe(plumber())
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(paths.jsDist))
        .pipe(bs.stream())
}

// Serve with Browser-Sync
export function serve() {
    bs.init({
        server: {
            baseDir: "./dist",
        },
        port: 3000,
        notify: false,
    })

    gulp.watch(paths.scss, styles)
    gulp.watch("./src/images/**/*", processImages).on("change", bs.reload)
    gulp.watch(paths.html, html)
    gulp.watch(paths.js, scripts)
    gulp.watch(paths.fonts, fonts).on("change", bs.reload)
}

// Build task
export const build = gulp.series(
    clean,
    gulp.parallel(styles, processImages, html, scripts, fonts)
)

// Dev task
export const dev = gulp.series(build, serve)

// Default task
export default dev
