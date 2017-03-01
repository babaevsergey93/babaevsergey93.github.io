var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('scripts', function(){
    return gulp.src('app/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('main.js', {newLine: ';'}))
        .pipe(gulp.dest('dist/js/'));
});


gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('sass/*.scss', ['sass']); // Наблюдение за sass файлами
});

