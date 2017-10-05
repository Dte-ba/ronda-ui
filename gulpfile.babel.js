import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack-stream';

var plugins = gulpLoadPlugins();
var config;

/*
import makeWebpackConfig from './webpack.make';

const srcPath = './src';
const outputPath = './build';

gulp.task('webpack', function() {
    const webpackDevConfig = makeWebpackConfig({ DEV: true });
    return gulp.src(webpackDevConfig.entry.lib)
        .pipe(plugins.plumber())
        .pipe(webpack(webpackDevConfig))
        .pipe(gulp.dest(outputPath));
});
*/