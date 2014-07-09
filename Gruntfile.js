module.exports = function(grunt) {
  grunt.initConfig({
     uglify: {
        'css/input.css': 'css/input.min.css'
     }
  });

  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
