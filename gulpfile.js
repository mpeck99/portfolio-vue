const gulp = require('gulp'),
  pump = require('pump'),
  replace = require('replace-in-file'),
  svgmin = require('gulp-svgmin');
// ----------------------------
// SVG Tasks
// ----------------------------

gulp.task('svgBuild', cb => {
  pump(
    [
      gulp.src('src/assets/svg/src/**/*.svg'),
      svgmin(function getOptions(file) {
        let svgfilename = file.relative;
        let svgclass = '';
        if (svgfilename.includes('logo-')) {
          svgclass = 'logo ' + svgfilename.replace(/.svg/g, '');
        } else if (svgfilename.includes('img-')) {
          svgclass = 'img ' + svgfilename.replace(/.svg/g, '');
        } else {
          svgclass = 'icn ' + svgfilename.replace(/.svg/g, '');
        }
        return {
          plugins: [
            {
              removeDimensions: true
            },
            {
              cleanupIDs: {
                remove: false
              }
            },
            {
              addClassesToSVGElement: {
                className: svgclass
              }
            }
          ]
        };
      }),
      gulp.dest('src/assets/svg/out/')
    ],
    cb
  );
});

gulp.task('svgConvertId', cb => {
  const svgReplaceOptions = {
    files: 'src/assets/svg/src/*.svg',
    from: ['id="Layer_1"'],
    to: ['']
  };
  replace(svgReplaceOptions, error => {
    if (error) {
      return console.error('Error occurred:', error);
    }
  });
  cb();
});
