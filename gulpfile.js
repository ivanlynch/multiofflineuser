let gulp = require('gulp');
let ui5preload = require('gulp-ui5-preload');
let uglify = require('gulp-uglify');
let gulpif = require('gulp-if');

gulp.task('resources', () => {
    return gulp.src(["" +
        "node_modules/@openui5/sap.ui.core/src/**/*",
        "node_modules/@openui5/sap.m/src/**/*",
        "node_modules/@openui5sap.ui.unified/src/**/*",
        "node_modules/@openui5themelib_sap_belize/src/**/*"
    ])
        .pipe(gulp.dest("www/resources"));
});

gulp.task('preload', () => {
    return gulp.src([
        'www/**/**.+(js|xml)', '!www/resources/**', '!www/Component-preload.js', '!gulpfile.js'
    ])
        .pipe(gulpif('www/**/*.js', uglify()))
        .pipe(ui5preload({
            base : '.', namespace : 'com/test/login'
        }))
        .pipe(gulp.dest('www'))
});

gulp.task('default', gulp.parallel('resources', 'preload'));