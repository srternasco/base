var gulp = require('gulp');
postcss = require('gulp-postcss');
autoprefixer = require('gulp-autoprefixer');
sourcemaps = require('gulp-sourcemaps');
atImport = require('postcss-import');
postCSS_InlineComment = require('postcss-inline-comment');
cssnext = require('postcss-cssnext');
sorting = require('postcss-sorting');
nested = require('postcss-nested');
pxtorem = require('postcss-pxtorem');
uglify = require('gulp-uglify');
newer = require('gulp-newer');
rename = require('gulp-rename');
nano = require('gulp-cssnano');
notify = require("gulp-notify");

var stylelintConfig = {
    "rules": {
        "at-rule-empty-line-before": ["always", {
            except: ["blockless-group", "first-nested"],
            ignore: ["after-comment"],
            message: ["Deja un espacio despues de una propiedad"]
        }],
        "at-rule-name-case": ["lower", {
            message: ["Las propiedades siempre en minúsculas"]
        }],
        "at-rule-name-space-after": "always-single-line",
        "at-rule-semicolon-newline-after": ["always", {
            message: ["Punto y coma = return"]
        }],
        "block-closing-brace-newline-after": ["always", {
            message: ["Llave = return"]
        }],
        "block-closing-brace-newline-before": ["always", {
            message: ["La llave de cierre siempre va sola "]
        }],
        "block-no-empty": [true, {
            message: ["Propiedad vacía, golpe de remo por gañan."]
        }],
        "block-opening-brace-newline-after": ["always", {
            message: ["Llave de apertura siempre va sola"]
        }],
        "block-opening-brace-space-before": ["always", {
            message: ["Propiedad y llave siempre separadas por un espacio"]
        }],
        "color-hex-length": ["short", {
            message: ["¿Te gusta escribir más?"]
        }],
        "color-no-invalid-hex": [true, {
            message: ["En la vida eso será un color"]
        }],
        "comment-whitespace-inside": "always",
        "declaration-bang-space-before": ["always", {
            message: ["Que menos que dar un poco de separación a ese !important del averno"]
        }],
        "declaration-block-no-ignored-properties": true,
        "declaration-block-no-shorthand-property-overrides": [true, {
            message: ["El shorthand en primer lugar. Ejemplo .foo { margin: 10px; margin-right: 5px; }"]
        }],
        "declaration-block-semicolon-space-before": ["never", {
            message: ["Espacio antes del ; lo próximo será usar Bootstrap ¿no?"]
        }],
        "declaration-block-single-line-max-declarations": [1, {
            message: ["Declaración por línea. La legibilidad es innegociable!!"]
        }],
        "declaration-block-trailing-semicolon": ["always", {
            message: ["Te has dejado un ; nada más que decir ¿no?"]
        }],
        "declaration-colon-space-after": ["always", {
            message: ["Después de : siempre se deja espacio"]
        }],
        "declaration-colon-space-before": ["never", {
            message: ["Antes de los : jamás se deja espacio"]
        }],
        "function-calc-no-unspaced-operator": [true, {
            message: ["Los operadores matematicos siempre van acompañados de un espacio, antes y después. Siempre"]
        }],
        "function-comma-space-after": "always",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": ["lower", {
            message: ["Minúsculas"]
        }],
        "function-whitespace-after": ["always", {
            message: ["spacebar"]
        }],
        "keyframe-declaration-no-important": [true, {
            message: ["quita ese important"]
        }],
        "max-empty-lines": 1,
        "max-nesting-depth": [2, {
            message: ["No, no y no. Deja de abusar del nesting"]
        }],
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-no-missing-punctuation": true,
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        "media-query-parentheses-space-inside": "never",
        "no-eol-whitespace": [true, {
            message: ["A borrar los espacios"]
        }],
        "no-extra-semicolons": [true, {
            message: ["Te sobra un ;"]
        }],
        "number-leading-zero": ["never", {
            message: ["Escribiendo ceros de más"]
        }],
        // "number-max-precision": [2, {
        //     message: ["Sobran decimales."]
        // }],
        "number-no-trailing-zeros": [true, {
            message: ["Sobran ceros"]
        }],
        "property-case": ["lower", {
            message: ["En minúsculas"]
        }],
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-combinator-space-after": ["always", {
            message: ["Espacio entre selectores"]
        }],
        "selector-combinator-space-before": ["always", {
            message: ["Espacio entre selectores"]
        }],
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-max-empty-lines": 0,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": ["single", {
            message: ["Doble para IE8. Estamos en 2016."]
        }],
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "unit-case": "lower",
        "unit-no-unknown": true
    },

}

var imgSrc = './src/img/*';
var imgDist = './img';
var jsSrc = './src/js/*.js';
var jsDist = './js';

function errorAlertJS(error) {
    notify.onError({
        title: "Gulp JavaScript",
        subtitle: "Algo esta mal en tu JavaScript!",
        sound: "Basso"
    })(error);
    console.log(error.toString());
    this.emit("end");
};

function errorAlertPost(error) {
    notify.onError({
        title: "Gulp postCSS",
        subtitle: "Algo esta mal en tu CSS!",
        sound: "Basso"
    })(error);
    console.log(error.toString());
    this.emit("end");
};

gulp.task('compress', function() {
    return gulp.src(jsSrc)
        .pipe(uglify())
        .on("error", errorAlertJS)
        .pipe(gulp.dest(jsDist))
        .pipe(notify({
            message: 'JavaScript complete'
        }));
});

gulp.task('css', function() {
    var processors = [
        atImport,
        nested,
        cssnext,
        pxtorem({
            root_value: 16,
            unit_precision: 2,
            prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing', 'margin', 'padding'],
            replace: true,
            media_query: false
        }),
        sorting({
            "sort-order": "csscomb"
        }),
        autoprefixer
    ];
    return gulp.src('./src/css/styles.css')

    .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .on("error", errorAlertPost)
        .pipe(sourcemaps.write('./css', {
            sourceRoot: '/src'
        }))
        .pipe(gulp.dest('./css'))
        .pipe(notify({
            message: 'postCSS complete'
        }));
});

gulp.task('minify', function() {
    return gulp.src('./css/styles.css')
        .pipe(nano())
        .pipe(gulp.dest('./css'))
        .pipe(notify({
            message: 'CSSnano task complete'
        }));
});

gulp.task('imagemin', function() {
    return gulp.src(imgSrc)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(imgDist));
});



gulp.task('images', function() {
    return gulp.src(imgSrc)
        .pipe(newer(imgDist))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDist));
});


gulp.task('default', function() {
    gulp.watch('./src/css/*.css', ['css']);
    gulp.watch('./src/img/**', ['images']);
});

gulp.task('build', ['minify', 'compress']);
