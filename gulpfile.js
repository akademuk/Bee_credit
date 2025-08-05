const browserSync = require("browser-sync").create()
const gulp = require("gulp")
const cleanCSS = require("gulp-clean-css")
const concat = require("gulp-concat")
const htmlmin = require("gulp-htmlmin")
const plumber = require("gulp-plumber")
const sass = require("gulp-sass")(require("sass"))
const uglify = require("gulp-uglify")
const fs = require('fs')
const path = require('path')

// Simple delete function instead of del
function deleteSync(patterns) {
    patterns.forEach(pattern => {
        if (pattern.startsWith('!')) return
        const dirPath = pattern.replace('/**', '')
        if (fs.existsSync(dirPath)) {
            fs.rmSync(dirPath, { recursive: true, force: true })
        }
    })
}

// Paths
const paths = {
    scss: "./src/scss/**/*.scss",
    css: "./dist/css",
    images: "./src/images/**/*",
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
    deleteSync(["./dist/**", "!./dist"])
    return Promise.resolve()
}

// Compile SCSS to CSS
function styles() {
    return gulp
        .src(paths.scss)
        .pipe(plumber())
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.stream())
}

// Copy original images
function copyImages() {
    return gulp
        .src("./src/images/**/*", { encoding: false })
        .pipe(gulp.dest(paths.imagesDist))
}

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
        .pipe(browserSync.stream())
}

// Process JS
function scripts() {
    return gulp
        .src(paths.js)
        .pipe(plumber())
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(paths.jsDist))
        .pipe(browserSync.stream())
}

// Serve with Browser-Sync
function serve() {
    browserSync.init({
        server: {
            baseDir: "./dist",
        },
        port: 3000,
        notify: false,
    })

    gulp.watch(paths.scss, styles)
    gulp.watch("./src/images/**/*", copyImages).on("change", browserSync.reload)
    gulp.watch(paths.html, html)
    gulp.watch(paths.js, scripts)
    gulp.watch(paths.fonts, fonts).on("change", browserSync.reload)
}

// Build task
const build = gulp.series(
    clean,
    gulp.parallel(styles, copyImages, html, scripts, fonts)
)

// Dev task
const dev = gulp.series(build, serve)

// Export tasks
exports.clean = clean
exports.styles = styles
exports.copyImages = copyImages
exports.fonts = fonts
exports.html = html
exports.scripts = scripts
exports.serve = serve
exports.build = build
exports.dev = dev
exports.default = dev
