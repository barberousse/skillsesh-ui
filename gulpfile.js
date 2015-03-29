require('dotenv').load();

var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    server = require('gulp-server-livereload'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
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
    return gulp.src('app/app.js', {read: false})
        .pipe( plumber() )
        .pipe( browserify({
            insertGlobals: false,
            debug: process.env.NODE_ENV === 'development',
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

gulp.task('sass', function() {
    return gulp.src('sass/index.scss')
        .pipe( plumber() )
        .pipe( sourcemaps.init() )
            .pipe( sass() )
        .pipe( sourcemaps.write() )
        .pipe( rename('main.css') )
        .pipe( gulp.dest('public/css'));
});

gulp.task('default', ['index', 'vendor', 'sass', 'build']);

gulp.task('watch', ['default'], function(){
    gulp.watch('app/**/*.js', ['build']);
    gulp.watch('sass/**/*.scss', ['sass']);

    return gulp.src('public')
        .pipe( plumber() )
        .pipe( server({
            livereload: true,
            host: process.env.IP,
            port: process.env.PORT
        }));
});
