var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imageMin = require('gulp-imagemin');
var concat = require('gulp-concat');


//COPY HTML;
gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

//COMPILES AND CONCATS SASS TO CSS;
gulp.task('sass', function() {
        gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(concat("main.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

//CONCATENATE JS FILES;
gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
})

//IMAGE MINIMIZATION;
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream())
);

//BROWSER SYNC WHEN CHANGES ARE MADE;
gulp.task('reload', ['sass', 'scripts', 'copyHtml', 'imageMin'], function() {
    browserSync.init({
    server: './dist',
    index: 'index.html'
});
gulp.watch('src/sass/*.scss', ['sass']);
gulp.watch('src/*.html', ['copyHtml']);
gulp.watch('src/images/*', ['imageMin']);
gulp.watch('src/js/*.js', ['scripts']);
});