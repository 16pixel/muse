const gulp = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const pkg = require("./package.json");
const header = require("gulp-header");
const exec = require('child_process').exec;

const banner = [
  "/*! ",
  "<%= package.name %> ",
  "v<%= package.version %> | ",
  "(c) " + new Date().getFullYear() + " <%= package.author %> |",
  " <%= package.homepage %>",
  " */",
  "\n"
].join("");

gulp.task("browser-sync", function () {
  browserSync.init({
    open: false,
    server: {
      baseDir: "./docs/public"
    }
  });
});

gulp.task("style", function () {
  gulp
    .src("src/muse.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(rename({suffix: ".min"}))
    .pipe(sourcemaps.write("./"))
    .pipe(header(banner, {package: pkg}))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
});

gulp.task('hugo', function () {
  let child = exec('hugo-dev --quiet -s docs')
  // child.stdout.pipe(process.stdout)
  child.stderr.pipe(process.stderr)
})

gulp.task("default", ["style", "hugo", "browser-sync"], function () {
  gulp.watch("src/**/*.scss", ['style', 'hugo', reload]);
  gulp.watch("docs/content/**/*.md", ["hugo", reload]);
  gulp.watch("docs/layouts/**/*.html", ["hugo", reload]);
  gulp.watch("docs/assets/**/*.scss", ["hugo", reload]);
  gulp.watch("docs/assets/**/*.js", ["hugo", reload]);
});
