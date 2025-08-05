import browserSync from "browser-sync"
import { deleteAsync } from "del"
import gulp from "gulp"
import cleanCSS from "gulp-clean-css"
import concat from "gulp-concat"
import htmlmin from "gulp-htmlmin"
import plumber from "gulp-plumber"
import dartSass from "sass"
import gulpSass from "gulp-sass"
import uglify from "gulp-uglify"
import webp from "gulp-webp"

const sass = gulpSass(dartSass)
const browser = browserSync.create()

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
function clean() {
    return deleteAsync(["./dist/**", "!./dist"])
}

// Compile SCSS to CSS
function styles() {
    return gulp
        .src(paths.scss)
        .pipe(plumber())
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.css))
        .pipe(browser.stream())
}

// Copy SVG files
function copySVG() {
    return gulp.src(paths.svg).pipe(gulp.dest(paths.imagesDist))
}

// Copy original images
function copyImages() {
    return gulp
        .src("./src/images/**/*.{jpg,jpeg,png,avif}", { encoding: false })
        .pipe(gulp.dest(paths.imagesDist))
}

// Convert to WebP
function webpImages() {
    return gulp
        .src(paths.images, { encoding: false })
        .pipe(gulp.dest(paths.imagesDist)) // временно без webp
}

// Copy videos
function copyVideos() {
    return gulp.src(paths.videos, { encoding: false }).pipe(gulp.dest(paths.imagesDist))
}

// Process all images
const processImages = gulp.series(copySVG, copyImages, webpImages, copyVideos)

// Copy Fonts
function fonts() {
    return gulp.src(paths.fonts, { encoding: false }).pipe(gulp.dest(paths.fontsDist))
}

// Process HTML
function html() {
    return gulp
        .src(paths.html)
        .pipe(htmlmin({ 
            collapseWhitespace: true, 
            removeComments: true,
            removeRedundantAttributes: false,
            removeEmptyAttributes: false,
            caseSensitive: true,
            minifyCSS: false,
            minifyJS: false
        }))
        .pipe(gulp.dest(paths.htmlDist))
        .pipe(browser.stream())
}

// Process JS
function scripts() {
    return gulp
        .src(paths.js)
        .pipe(plumber())
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(paths.jsDist))
        .pipe(browser.stream())
}

// Serve with Browser-Sync
function serve() {
    browser.init({
        server: {
            baseDir: "./dist",
        },
        port: 3000,
        notify: false,
    })

    gulp.watch(paths.scss, styles)
    gulp.watch("./src/images/**/*", processImages).on("change", browser.reload)
    gulp.watch(paths.html, html)
    gulp.watch(paths.js, scripts)
    gulp.watch(paths.fonts, fonts).on("change", browser.reload)
}

// Build task
const build = gulp.series(
    clean,
    gulp.parallel(styles, processImages, html, scripts, fonts)
)

// Dev task
const dev = gulp.series(build, serve)

// Export tasks
exports.clean = clean
exports.styles = styles
exports.copySVG = copySVG
exports.copyImages = copyImages
exports.webpImages = webpImages
exports.copyVideos = copyVideos
exports.processImages = processImages
exports.fonts = fonts
exports.html = html
exports.scripts = scripts
exports.serve = serve
exports.build = build
exports.dev = dev
exports.default = dev
