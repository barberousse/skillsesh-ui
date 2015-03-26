require('dotenv').load();

var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    server = require('gulp-server-livereload'),
    browserify = require('gulp-browserify');

var vendor = "./bower_components/",
    vendorJs = [
        vendor + 'jquery/dist/jquery.js',
        vendor +  'materialize/dist/js/materialize.js'
    ],
    vendorCss = [
        vendor + 'materialize/dist/css/materialize.css'
    ],
    vendorFonts = [
        vendor + 'materialize/dist/font/**'
];

gulp.task('index', function(){
    return gulp.src('index.html')
        .pipe( gulp.dest('public'));
});

gulp.task('delete', function(cb){
    del('public', cb);
});

gulp.task('build', function(){
    return gulp.src('app/app.js')
        .pipe( browserify({
            insertGlobals: false,
            debug: true,
            transform: ['reactify'],
            extensions: ['js', 'jsx']
        }))
        .pipe( rename('main.js') )
        .pipe( gulp.dest('public/js') );
});

gulp.task('vendor:fonts', function(){
    return gulp.src(vendorFonts)
        .pipe( gulp.dest('public/font') );
});

gulp.task('vendor:css', function(){
    return gulp.src(vendorCss)
        .pipe( rename('vendor.css') )
        .pipe( gulp.dest('public/css') );
});

gulp.task('vendor:js', function(){
    return gulp.src(vendorJs)
        .pipe( concat('vendor.js') )
        .pipe( gulp.dest('public/js') );
});

gulp.task('vendor', ['vendor:js', 'vendor:css', 'vendor:fonts']);

gulp.task('default', ['index', 'vendor', 'build']);

gulp.task('watch', ['default'], function(){
    gulp.watch('app/**/*.js', ['build']);

    return gulp.src('public')
        .pipe( server({
            livereload: true,
            host: process.env.IP,
            port: process.env.PORT
        }));
});
