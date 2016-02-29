var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer');
newer = require('gulp-newer');
imagemin = require('gulp-imagemin');
pngquant = require('imagemin-pngquant');
sass = require('gulp-sass');
cssnano = require('gulp-cssnano');
sourcemaps = require('gulp-sourcemaps');
rename = require('gulp-rename');
notify = require("gulp-notify");
bourbon = require("node-bourbon").includePaths;
browserSync = require("browser-sync");

gulp.task("browserSync", function() {
	browserSync({
		server: {
			baseDir: "./"
		}
	})
});

//Notificando errores de CSS
function errorAlertPost(error) {
	notify.onError({
		title: "SCSS",
		subtitle: "Algo esta mal en tu CSS!",
		sound: "Basso"
	})(error);
	console.log(error.toString());
	this.emit("end");
};


//Optimizando todas las imagenes en formato SVG, PNG, JPG y GIF
gulp.task('imagemin', function() {
	return gulp.src('img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('src/img'));
});


//Incluyendo prefijos CSS a todas las propiedades que lo necesiten
gulp.task('autoprefixer', function() {
	//Ruta de nuestro archivo CSS
	return gulp.src('css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		//ruta donde dejaremos los archivos con prefijos
		.pipe(gulp.dest('/css/'));
});

gulp.task("sass", function() {
	gulp.src("src/scss/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: bourbon
		}))
		.on("error", errorAlertPost)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest("css/"))
		.pipe(browserSync.reload({
			stream: true
		}))
		.pipe(notify({
			message: 'SCSS complete'
		}));
});

//Comprimiendo los CSS
gulp.task('mincss', function() {
	return gulp.src('css/styles.css')
		.pipe(sourcemaps.init())
		.pipe(cssnano())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('css/'));
});


//Cada vez que incluyamos una nueva imagen solo esta sera optimizada por imagemin, las que ya estén optimizadas serán excluídas del proceso
var imgSrc = 'img/**';
var imgDest = 'src/img';

// Minify any new images
gulp.task('images', function() {

	// Add the newer pipe to pass through newer images only
	return gulp.src(imgSrc)
		.pipe(newer(imgDest))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDest));
});


//Watch task
gulp.task("watch", ["browserSync", "sass"], function() {
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/*.**', ['imagemin']);
	gulp.watch("./*.html").on("change", browserSync.reload);
});